"use client";

import { IEvent } from "@/lib/mongodb/database/models/event.model"
import { useUser } from "@clerk/nextjs";

const CheckoutButton = ({ event }: { event: IEvent}) => {
    const hasEventFinished = new Date(event.endDateTime) < new Date();
    const { user } = useUser();
    const userId = user?.publicMetadata.userId as string;


  return (
    <div className="flex items-center gap-3">
        { hasEventFinished ? (
            <p className="p-2 text-right-400">Sorry, tickets are no longer available!</p>
        ) : (
            <>
                Button
            </>
        )}
    </div>
  )
}

export default CheckoutButton