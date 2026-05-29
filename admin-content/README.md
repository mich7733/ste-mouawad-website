# Admin Content

Use this folder to manage project content without touching the application code.

1. Add project images to `admin-content/images`.
2. Add or edit project entries in `admin-content/projects.json`.
3. Set each project image path as `/content-images/your-file-name.jpg`.

Each project needs English and Arabic text:

```json
{
  "slug": "custom-altar",
  "image": "/content-images/custom-altar.jpg",
  "title": {
    "en": "Custom Altar",
    "ar": "مذبح مخصص"
  },
  "description": {
    "en": "Hand-carved natural stone altar.",
    "ar": "مذبح من الحجر الطبيعي محفور يدوياً."
  }
}
```
