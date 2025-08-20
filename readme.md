# 📄 Privacy Policy Page

This project includes a dedicated **Privacy Policy** page located at:

```

[http://localhost:3000/privacy-policy](http://localhost:3000/privacy-policy)

```

This page is built using the **App Router** in Next.js 13+ and supports **static or dynamic content** as needed.

---

## 🌐 Multilingual Notice

The privacy policy page can be written in **English**, **Spanish**, or both, depending on your target audience or localization strategy.

---

## 📁 File Structure

```

/app
└── privacy-policy
└── page.tsx     → Main privacy policy page
/layout.tsx          → App layout
/globals.css         → Global styles

```

---

## ✏️ Editing the Content

You can update the text by editing:

```

/app/privacy-policy/page.tsx

```

We recommend keeping a clear structure with headings such as:

- **Introduction**
- **Information Collected**
- **Usage of Data**
- **User Rights**
- **Cookies Policy**
- **Contact**

---

## 🚀 Redirection Setup

When the app starts at `/`, it automatically redirects to the privacy policy page (`/privacy-policy`).

This is handled in:

```

/app/page.tsx

````

With the following content:

```tsx
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/privacy-policy');
}
````

---

## 📌 Notes

* You can integrate your real privacy content in **Markdown**, **JSON**, **CMS**, or **API**.
* For production, always update the legal texts according to your **business type** and **jurisdiction**.

---

## 💬 License & Disclaimer

This is a **template**.
Please consult with a **legal advisor** to ensure that your privacy policy complies with the applicable laws (e.g. **GDPR**, **CCPA**, **LGPD**).

---
