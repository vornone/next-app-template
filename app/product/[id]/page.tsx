// app/product/[id]/page.tsx
import React from 'react';

interface ProductPageProps {
  params: { id: string };
}

export default async function Product({ params }: ProductPageProps) {
  const { id } = await params;

  return (
    <div>
      <h1>Product Page</h1>
      <p>Product ID: {id}</p>
    </div>
  );
}