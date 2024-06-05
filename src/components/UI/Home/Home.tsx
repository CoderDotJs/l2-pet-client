/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { CardContent, Card } from "@/components/UI/card";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/UI/avatar";
import { JSX, SVGProps } from "react";
import PetsData from "./PetsData";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <>
      {/* Pets Details and Filtaring  */}
      <section>
        <PetsData />
      </section>

      <section className="w-full bg-gray-100 dark:bg-gray-800">
        <div className="container flex flex-col-reverse items-center gap-8 py-12 md:flex-row md:gap-16 lg:py-24 mx-auto">
          {/* Hero Section  */}
          <div className="flex flex-col items-start gap-4 px-10 sm:px-14 md:p-0">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Find Your Furry Friend
            </h1>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl">
              Adopt a loving pet and give them a forever home. Browse our
              selection of adorable dogs and cats waiting for their new family.
            </p>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Adopt Now
            </Link>
          </div>
          <div className="flex justify-center items-center w-full px-10 md:p-0">
            <img
              alt="Adorable dog"
              className="aspect-video w-full max-w-lg overflow-hidden rounded-xl object-cover sm:h-[320px] sm:w-full md:h-[400px] md:w-full"
              src="https://www.petfinder.com/static/890714910815db3def05eb8368e43198/aa3ae/kitten.webp"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 px-10 md:px-10">
        <div className="container mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Featured Pets
            </h2>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl">
              Meet some of our adoptable pets waiting for their forever homes.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Card>
              <img
                alt="Pet name"
                className="aspect-video w-full overflow-hidden rounded-t-xl object-cover"
                height="300"
                src="https://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg"
                width="400"
              />
              <CardContent className="space-y-2 p-4">
                <h3 className="text-lg font-semibold">Buddy</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Friendly and playful 2-year-old Labrador mix.
                </p>
                {/* <Link
                  className="inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Adopt
                </Link> */}
              </CardContent>
            </Card>
            <Card>
              <img
                alt="Pet name"
                className="aspect-video w-full overflow-hidden rounded-t-xl object-cover"
                height="300"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2MTHXNOqanXJD_6gUVfyt7P0KI1rv2pe5Wlx9dZixteX_nNvfHZ6mP6hqc6y8D7b3M94&usqp=CAU"
                width="400"
              />
              <CardContent className="space-y-2 p-4">
                <h3 className="text-lg font-semibold">Luna</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Affectionate and playful 1-year-old tabby cat.
                </p>
                {/* <Link
                  className="inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Adopt
                </Link> */}
              </CardContent>
            </Card>
            <Card>
              <img
                alt="Pet name"
                className="aspect-video w-full overflow-hidden rounded-t-xl object-cover"
                height="300"
                src="https://www.census.gov/newsroom/stories/pet-day/_jcr_content/root/responsivegrid/responsivegrid_1749353263/imagecore.coreimg.jpeg/1680634248356/stories-pet3-1300x867.jpeg"
                width="400"
              />
              <CardContent className="space-y-2 p-4">
                <h3 className="text-lg font-semibold">Max</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Energetic and loyal 3-year-old German Shepherd.
                </p>
                {/* <Link
                  className="inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Adopt
                </Link> */}
              </CardContent>
            </Card>
            <Card>
              <img
                alt="Pet name"
                className="aspect-video w-full overflow-hidden rounded-t-xl object-cover"
                height="300"
                src="https://www.aspca.org/sites/default/files/pet-planning_pet-trust-primer_main-image.jpg"
                width="400"
              />
              <CardContent className="space-y-2 p-4">
                <h3 className="text-lg font-semibold">Bella</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Gentle and loving 4-year-old Domestic Shorthair cat.
                </p>
                {/* <Link
                  className="inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Adopt
                </Link> */}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full bg-gray-100 py-12 md:py-24 dark:bg-gray-800 px-10 md:px-10">
        <div className="container mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              How It Works
            </h2>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl">
              Learn about the simple steps to adopt your new furry friend.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
                <SearchIcon className="h-6 w-6" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold">Browse Pets</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Explore our selection of adoptable pets.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
                <HeartIcon className="h-6 w-6" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold">Apply to Adopt</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Fill out an adoption application.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
                <HomeIcon className="h-6 w-6" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold">Home Visit</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We&apos;ll schedule a home visit to ensure a good fit.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
                <SmileIcon className="h-6 w-6" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold">Adopt Your Pet</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Bring home your new furry friend!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 px-10 md:px-10">
        <div className="container mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Testimonials
            </h2>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl">
              Hear from our happy pet owners.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="space-y-4 pt-4">
                <blockquote className="text-lg font-medium leading-relaxed">
                  “Adopting my dog, Max, was the best decision I ever made. He
                  has brought so much joy and love into my life.”
                </blockquote>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-avatar.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Proud dog owner
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-4 pt-4">
                <blockquote className="text-lg font-medium leading-relaxed">
                  “I can&apos;t imagine my life without my cat, Luna. She has
                  been the perfect addition to my family.”
                </blockquote>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-avatar.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Jane Smith</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Proud cat owner
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-4 pt-4">
                <blockquote className="text-lg font-medium leading-relaxed">
                  “Adopting Buddy has been life-changing. He has brought so much
                  love and laughter into my home.”
                </blockquote>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-avatar.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Sarah Johnson</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Proud dog owner
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

function HeartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function SmileIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  );
}
