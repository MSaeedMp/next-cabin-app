const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-br from-brand-300 via-stone-50 to-brand-300">
      {children}
    </main>
  );
};
export default AuthLayout;
