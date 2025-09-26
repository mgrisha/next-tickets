"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function addTicket(formData) {
  console.log("Hello from the server action!");
  const ticket = Object.fromEntries(formData);

  const supabase = createServerActionClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { error } = await supabase.from("Tickets").insert({
    ...ticket,
    user_email: user.email,
  });

  if (error) {
    throw new Error("Could not add the new ticket");
  }

  revalidatePath("/tickets");
  redirect("/tickets");
}

export async function deleteTicket(id) {
  const supabase = createServerActionClient({ cookies });

  // delete the data
  const { error } = await supabase.from("Tickets").delete().eq("id", id);

  if (error) {
    throw new Error("Could not delete the ticket");
  }

  revalidatePath("/tickets");
  redirect("/tickets");
}
