"use client"
import Header from '@/components/Header';

function Dashboard () {
    return (
        <>
        <Header />
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-semibold">Dashboard</h1>
                <p className="text-lg text-muted-foreground">Manage your link.</p>
            </div>
        </div>
        </>
    )
}

export default Dashboard