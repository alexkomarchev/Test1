import axios from 'axios';

const token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJiZHUuZnN0ZWMucnUiLCJhdWQiOnsiMCI6ImFwaVJlYWRPbmx5IiwiMiI6ImFwaV9nZXQifSwiZXhwIjoxNjc4NjUwNjU1LCJpZCI6IjQ3IiwianRpIjoiNWUwNmMwYmFlNGQzYmEyNTRkZjFjYmZlYTYzYTUzMDllOTlhODc5MDlmZGIwZWJjN2VhY2IzZDk0MGMyOTY3ODNkMjg3NzJlNjJjZTE3YTFlYjEzYzE5OTcyNmIzNDVkMWRlMjdlOGU0YjYyZTYyNWMzZDNlZWUxM2VhZTZiNmMiLCJpYXQiOjE2Nzg2NDg4NTV9.cgL3ckhUCSkoBD7QnugG6G8lAteqkdhSdRdG2vme9nzTsJEV7MrqowXE8i63KqbEPLEDfksrXnqzP04EduK0xg'
export const api =  axios.create({
  headers: {
    Authorization: `Bearer ${token}`
  }
});



