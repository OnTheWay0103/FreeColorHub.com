# FreeColorHub.com Core Data Types (TypeScript)

> **Note:** All types are defined in TypeScript for both frontend and backend usage. This document covers the core data models and API response types for the MVP.

---

## 1. Coloring Page

```ts
export interface ColoringPage {
  id: number;
  title: string;
  description?: string;
  imageUrl: string;
  thumbnailUrl: string;
  pdfUrl: string;
  category: string; // category slug
  ageGroup: "toddler" | "kids" | "teens" | "adults";
  difficulty: "simple" | "medium" | "complex" | "intricate";
  tags: string[]; // tag slugs
  downloadCount: number;
  rating: number;
  ratingCount: number;
  isAIGenerated: boolean;
  createdAt: string; // ISO date
}
```

---

## 2. AI Generation

```ts
export interface AIGeneration {
  generationId: string;
  prompt: string;
  style: "simple" | "complex" | "artistic" | "cartoon";
  size: "A4" | "Letter" | "Custom";
  status: "pending" | "processing" | "completed" | "failed";
  imageUrl?: string;
  pdfUrl?: string;
  errorMessage?: string;
  createdAt: string; // ISO date
}
```

---

## 3. Category

```ts
export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  parentId?: number;
  sortOrder: number;
  createdAt: string; // ISO date
}
```

---

## 4. Tag

```ts
export interface Tag {
  id: number;
  name: string;
  slug: string;
  createdAt: string; // ISO date
}
```

---

## 5. User (Reserved for future)

```ts
export interface User {
  id: number;
  email: string;
  name?: string;
  avatarUrl?: string;
  subscriptionType: "free" | "premium";
  subscriptionExpiresAt?: string; // ISO date
  createdAt: string; // ISO date
}
```

---

## 6. API Response Types

### 6.1 Paginated List Response

```ts
export interface PaginatedResponse<T> {
  total: number;
  pages: number;
  currentPage: number;
  items: T[];
}
```

### 6.2 Standard API Response

```ts
export interface ApiResponse<T> {
  data: T;
  message?: string;
}
```

### 6.3 Error Response

```ts
export interface ApiError {
  code: number;
  message: string;
  details?: any;
}
```

---

## 7. Example Usage

```ts
// Get coloring pages list
const res: PaginatedResponse<ColoringPage> = ...;

// Get coloring page detail
const res: ApiResponse<ColoringPage> = ...;

// AI generation result
const res: ApiResponse<AIGeneration> = ...;

// Error response
const err: ApiError = { code: 404, message: 'Not Found' };
```
