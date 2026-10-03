-- Gestion École RDC : stockage partagé entre téléphone et ordinateur
create table if not exists public.school_state (
  id text primary key,
  state jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.school_state enable row level security;

drop policy if exists "school_state_select" on public.school_state;
drop policy if exists "school_state_insert" on public.school_state;
drop policy if exists "school_state_update" on public.school_state;

create policy "school_state_select"
on public.school_state
for select
to anon, authenticated
using (true);

create policy "school_state_insert"
on public.school_state
for insert
to anon, authenticated
with check (true);

create policy "school_state_update"
on public.school_state
for update
to anon, authenticated
using (true)
with check (true);

grant select, insert, update on public.school_state to anon, authenticated;

-- Ligne initiale facultative : l'application la créera automatiquement si elle n'existe pas.
-- insert into public.school_state(id,state) values ('ecole-rdc-principale','{}'::jsonb)
-- on conflict (id) do nothing;
