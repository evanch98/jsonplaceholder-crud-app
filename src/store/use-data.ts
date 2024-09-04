/* eslint-disable no-unused-vars */
import axios from 'axios';
import { create } from 'zustand';

type Post = {
  id: number;
  title: string;
  body: string;
};

type UseDataStore = {
  posts: Post[];
  fetchPosts: () => void;
  addPost: (post: Omit<Post, 'id'>) => void;
  updatePost: (post: Post) => void;
  deletePost: (id: number) => void;
};

export const useData = create<UseDataStore>((set) => ({
  posts: [],
  fetchPosts: async () => {
    try {
      const response = await axios.get('/api/posts');
      set({ posts: response.data });
    } catch (error) {
      console.error('Failed to fetch posts:', error);
    }
  },
  addPost: async (post) => {
    try {
      const response = await axios.post('/api/add', post);
      set((state) => ({ posts: [response.data, ...state.posts] }));
    } catch (error) {
      console.error('Failed to add post:', error);
    }
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
