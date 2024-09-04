/* eslint-disable no-unused-vars */
import axios from 'axios';
import { create } from 'zustand';

export type Post = {
  id: number;
  title: string;
  body: string;
};

type UseDataStore = {
  posts: Post[];
  lastId: number;
  fetchPosts: () => void;
  addPost: (post: Omit<Post, 'id'>) => void;
  updatePost: (post: Post) => void;
  deletePost: (id: number) => void;
};

export const useData = create<UseDataStore>((set) => ({
  posts: [],
  lastId: 100,
  fetchPosts: async () => {
    try {
      const response = await axios.get('/api/posts');
      set({ posts: response.data });

      const highestId = response.data.reduce(
        (max: number, post: Post) => (post.id > max ? post.id : max),
        0,
      );
      set({ lastId: highestId });
    } catch (error) {
      console.error('Failed to fetch posts:', error);
    }
  },
  addPost: async (post) => {
    set((state) => {
      const newId = state.lastId + 1;
      const newPost = { ...post, id: newId };

      axios
        .post('/api/add', newPost)
        .then((response) => {
          console.log('Post added:', response.data);
        })
        .catch((error) => {
          console.error('Failed to add post:', error);
        });

      return {
        posts: [newPost, ...state.posts],
        lastId: newId,
      };
    });
  },
  updatePost: async (post) => {
    try {
      const response = await axios.patch('/api/update', post);
      set((state) => ({
        posts: state.posts.map((p) => (p.id === post.id ? response.data : p)),
      }));
    } catch (error) {
      console.error('Failed to update post:', error);
    }
  },
  deletePost: async (id) => {
    try {
      await axios.delete('/api/delete', { data: { id } });
      set((state) => ({
        posts: state.posts.filter((post) => post.id !== id),
      }));
    } catch (error) {
      console.error('Failed to delete post:', error);
    }
  },
}));
