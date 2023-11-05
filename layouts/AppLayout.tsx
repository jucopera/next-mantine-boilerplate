import { AppShell, AppShellHeader, AppShellNavbar, AppShellMain } from '@mantine/core';
import { PropsWithChildren } from 'react';

export function AppLayout({ children }: PropsWithChildren) {
  return (
    <AppShell header={{ height: 60 }} navbar={{ width: 300, breakpoint: 'sm' }} padding="md">
      <AppShellHeader>
        <div>Logo</div>
      </AppShellHeader>
      <AppShellNavbar p="md">Navbar</AppShellNavbar>
      <AppShellMain> {children}</AppShellMain>
    </AppShell>
  );
}
