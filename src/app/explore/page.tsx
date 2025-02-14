"use client"
import NavBar from '@/components/NavBar';
import { stores } from '@/lib/stores-list';
import Link from "next/link";

export default function ExplorePage() {
  return (
    <>
    <NavBar />
		<div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold mx-auto">Deployments</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {stores.map((store) => (
            <div key={store.name} className="bg-white shadow-md p-4">
              <h2 className="text-xl font-semibold">{store.name}</h2>
              <p>{store.description}</p>
              <div className="flex gap-4">
              <Link href={store.website} className="text-blue-600 hover:underline">Visit website</Link>
              </div>
              <div className="flex gap-4">
              <Link href={store.facebook} className="text-blue-600 hover:underline">Facebook page</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}