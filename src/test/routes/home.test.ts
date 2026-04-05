import { app } from '../../main/app';
import request from 'supertest';

describe('Home page', () => {
  describe('on GET /', () => {
    it('should return task manager home page with 200 status', async () => {
      const response = await request(app).get('/');
      expect(response.status).toBe(200);
    });

    it('should contain page title', async () => {
      const response = await request(app).get('/');
      expect(response.text).toContain('HMCTS | Task Manager');
    });

    it('should contain task list table', async () => {
      const response = await request(app).get('/');
      expect(response.text).toContain('Task List');
      expect(response.text).toContain('Case Number');
      expect(response.text).toContain('Title');
    });

    it('should contain create task button', async () => {
      const response = await request(app).get('/');
      expect(response.text).toContain('Create Task');
    });

    it('should contain search functionality', async () => {
      const response = await request(app).get('/');
      expect(response.text).toContain('Search by title or case manager');
      expect(response.text).toContain('Search by ID');
    });
  });
});