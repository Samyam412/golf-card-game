"use client";

import { useParams } from "next/navigation";

interface StartPageProps {
  id: string;
}

export default function StartPage() {
  const { id } = useParams();

  if (!id) {
    return <div>Invalid room id</div>;
  }

  return <div>{id}</div>;
}
