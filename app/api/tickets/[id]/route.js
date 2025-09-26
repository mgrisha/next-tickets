import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// export const dynamic = "force-dynamic";

// export async function GET(_, { params }) {
//   const { id } = await params;
//   const res = await fetch(`http://localhost:4000/tickets/${id}`);

//   if (!res.ok) {
//     return NextResponse.json(
//       { error: "Cannot find the ticket" },
//       { status: 404 }
//     );
//   }

//   const ticket = await res.json();
//   return NextResponse.json(ticket, { status: 200 });
// }

export async function DELETE(_, { params }) {
  const { id } = await params;
  const supabase = createRouteHandlerClient({ cookies });
  const { error } = await supabase.from("Tickets").delete().eq("id", id);
  return NextResponse.json({ error });
}
