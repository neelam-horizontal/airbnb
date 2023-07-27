// import { NextResponse } from "next/server";

// import prisma from "@/app/libs/prismadb";
// import getCurrentUser from "@/app/actions/getCurrentUser";

// export async function POST(
//   request: Request, 
// ) {
//   const currentUser = await getCurrentUser();

//   if (!currentUser) {
//     return NextResponse.error();
//   }

//   const body = await request.json();
//   const { 
//     listingId,
//     startDate,
//     endDate,
//     totalPrice
//    } = body;

//    if (!listingId || !startDate || !endDate || !totalPrice) {
//     return NextResponse.error();
//   }

//   const listingAndReservation = await prisma.listing.update({
//     where: {
//       id: listingId
//     },
//     data: {
//       reservations: {
//         create: {
//           userId: currentUser.id,
//           startDate,
//           endDate,
//           totalPrice,
//         }
//       }
//     }
//   });

//   return NextResponse.json(listingAndReservation);
// }

import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";

export async function POST(
  request: Request, 
) {
const body = await request.json();
const { 
  email,
  name,
  password
} = body;

const hashedPassword = await bcrypt.hash(password, 12);

const user = await prisma.user.create({
  data: {
    reservations: {
      create: {
        email,
        name,
        hashedPassword
      }
    }
  }
})


  return NextResponse.json(user);
}
