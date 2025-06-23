# FreeColorHub.com API Documentation (MVP)

> **Note:** All endpoints and responses are in English. This document covers the core APIs for the first release (MVP).

---

## 1. Coloring Pages

### 1.1 Get Coloring Pages List

- **Method:** GET
- **Path:** `/api/pages`
- **Description:** Get a paginated list of coloring pages, with optional filters.
- **Query Parameters:**
  - `page` (number, optional): Page number (default: 1)
  - `limit` (number, optional): Items per page (default: 20)
  - `category` (string, optional): Category slug
  - `ageGroup` (string, optional): Age group (e.g. 'kids', 'adults')
  - `difficulty` (string, optional): Difficulty level
  - `tags` (string, optional): Comma-separated tag slugs
  - `sort` (string, optional): Sort by ('latest', 'popular', 'rating')
  - `search` (string, optional): Keyword search
- **Response:**

```json
{
  "total": 1000,
  "pages": 50,
  "currentPage": 1,
  "items": [
    {
      "id": 123,
      "title": "Cute Cat",
      "thumbnailUrl": "/images/pages/123-thumb.png",
      "category": "animals",
      "ageGroup": "kids",
      "difficulty": "simple",
      "tags": ["cat", "cute"],
      "downloadCount": 1200,
      "rating": 4.8,
      "isAIGenerated": false
    }
  ]
}
```

- **Errors:**
  - `400`: Invalid parameters
  - `500`: Server error

---

### 1.2 Get Coloring Page Detail

- **Method:** GET
- **Path:** `/api/pages/{id}`
- **Description:** Get detail info for a specific coloring page.
- **Response:**

```json
{
  "id": 123,
  "title": "Cute Cat",
  "description": "A cute cat for kids coloring.",
  "imageUrl": "/images/pages/123.png",
  "pdfUrl": "/pdf/pages/123.pdf",
  "category": "animals",
  "ageGroup": "kids",
  "difficulty": "simple",
  "tags": ["cat", "cute"],
  "downloadCount": 1200,
  "rating": 4.8,
  "ratingCount": 50,
  "isAIGenerated": false,
  "createdAt": "2024-06-01T12:00:00Z"
}
```

- **Errors:**
  - `404`: Not found
  - `500`: Server error

---

### 1.3 Download Coloring Page PDF

- **Method:** GET
- **Path:** `/api/pages/{id}/download`
- **Description:** Download the coloring page as a PDF file.
- **Response:**
  - Returns PDF file (Content-Type: application/pdf)
- **Errors:**
  - `404`: Not found
  - `500`: Server error

---

## 2. AI Coloring Page Generation

### 2.1 Generate Coloring Page (AI)

- **Method:** POST
- **Path:** `/api/generate`
- **Description:** Generate a new coloring page using AI based on user prompt.
- **Request Body:**

```json
{
  "prompt": "A dragon flying over mountains",
  "style": "cartoon", // or 'simple', 'complex', 'artistic'
  "size": "A4" // or 'Letter', 'Custom'
}
```

- **Response:**

```json
{
  "generationId": "abc123",
  "status": "processing"
}
```

- **Errors:**
  - `400`: Invalid input
  - `429`: Generation limit reached
  - `500`: Server error

---

### 2.2 Get AI Generation Result

- **Method:** GET
- **Path:** `/api/generate/{generationId}`
- **Description:** Get the result of an AI generation task.
- **Response:**

```json
{
  "generationId": "abc123",
  "status": "completed",
  "imageUrl": "/images/generated/abc123.png",
  "pdfUrl": "/pdf/generated/abc123.pdf"
}
```

- **Errors:**
  - `404`: Not found
  - `202`: Still processing
  - `500`: Server error

---

## 3. Online Coloring Tool

### 3.1 Save Coloring Progress (Local Only)

- **Note:** MVP version saves progress locally in browser. No backend API required.

### 3.2 Download Colored Image

- **Method:** POST
- **Path:** `/api/coloring/download`
- **Description:** Download the colored image as PNG/JPG (optional, if server-side needed).
- **Request Body:**

```json
{
  "imageData": "base64-encoded-image-data"
}
```

- **Response:**
  - Returns image file (Content-Type: image/png or image/jpeg)
- **Errors:**
  - `400`: Invalid data
  - `500`: Server error

---

## 4. Search

### 4.1 Search Coloring Pages

- **Method:** GET
- **Path:** `/api/search`
- **Description:** Search coloring pages by keyword and filters.
- **Query Parameters:**
  - `q` (string): Search keyword
  - `category`, `ageGroup`, `difficulty`, `tags`, `sort` (same as /api/pages)
- **Response:**
  - Same as `/api/pages` list response
- **Errors:**
  - `400`: Invalid parameters
  - `500`: Server error

---

## 5. User (Optional, for future)

### 5.1 Register / Login / Profile

- **Note:** User system is not included in MVP. Reserved for future versions.

---

## 6. Error Codes

| Code | Meaning               |
| ---- | --------------------- |
| 400  | Bad Request           |
| 401  | Unauthorized          |
| 403  | Forbidden             |
| 404  | Not Found             |
| 429  | Too Many Requests     |
| 500  | Internal Server Error |
| 202  | Accepted (Processing) |

---

## 7. Authentication

- **MVP:** All endpoints are public. No authentication required.
- **Future:** User authentication (JWT, OAuth) will be added for user-specific features.

---

## 8. Example Usage

### Get coloring pages:

```
GET /api/pages?category=animals&difficulty=simple&sort=popular
```

### Generate a coloring page:

```
POST /api/generate
{
  "prompt": "A unicorn in a magical forest",
  "style": "artistic",
  "size": "A4"
}
```

### Download a coloring page PDF:

```
GET /api/pages/123/download
```
