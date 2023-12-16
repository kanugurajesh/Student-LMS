export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <>
        <link
          rel="preload"
          href="/hero_use_case_v5.riv"
          as="fetch"
          crossOrigin="anonymous"
        />
        <div>{children}</div>
      </>
  );
}
