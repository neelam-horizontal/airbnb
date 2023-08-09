This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



<!-- packages -->
npm install zustand
npm install axios
npm install react-hook-form
npm install react-hot-toast

<!-- prism for auth db -->
npm install -D prisma
npx prisma init
npx prisma db push
npm install next-auth  @prisma/client @next-auth/prisma-adapter
npm install bcrypt
npm install -D @types/bcrypt


<!-- Github Auth -->
https://github.com/settings/developers
New OAuth App
details: name and url of project
<!-- save these following data in .env -->
client Id
Client Secrets
<!-- for img from github profile -->
next.config.js =>
images: {
    domains: [
        'avatars.githubusercontent.com',
    ]
}

<!-- Google Auth -->
https://console.cloud.google.com/welcome?project=eng-amphora-394511
create new project
select that project
search api in top bar
=> enable APIs & Services
=> OAuth consent screen -> external -> create
=> fill all the details: name, url, email -> save and continue
=> Credentials => + create Credentials(new Credentials) => Create OAuth client ID(https://console.cloud.google.com/apis/credentials/oauthclient?previousPage=%2Fapis%2Fcredentials%3Fproject%3Dairbnb-394511&project=airbnb-394511)
=>
Application type: Web application
Name: Web client 1
Authorized redirect URIs:
http://localhost:3000/api/auth/callback/google => create
<!-- save these following data in .env -->
client Id
Client Secrets
<!-- for img from google profile -->
next.config.js =>
images: {
    domains: [
        'lh3.googleusercontent.com',
    ]
}

<!-- if you still get error -->
remove .next folder
npm run dev
(new next module file will create)



npm install query-string
npm install world-countries
npm install react-select
npm install leaflet
npm install -D @types/leaflet
npm install react-leaflet
<!-- make accoutn on cloudinary -->
npm install next-cloudinary
https://console.cloudinary.com/settingsc-0d21f73daaf516a277a5dd1fa3ad99/upload_presets/new
-> Upload preset name: COPY TXT [SAVE IN ImageUpload.JSX -> uploadPreset]
-> Signing Mode: UNSIGNED

=> Upload presets:
Unsigned uploading enabled: scc4ntyf : Unsigned

<!-- =================== -->
-> next.congig.js => "res.cloudinary.com"
=> MEDIA LIBRARY: https://console.cloudinary.com/console/c-0d21f73daaf516a277a5dd1fa3ad99/media_library/search?q=


NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME -> IN .ENV