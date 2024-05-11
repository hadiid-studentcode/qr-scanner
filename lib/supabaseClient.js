/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://nywnoaupvxnldvujhfqi.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55d25vYXVwdnhubGR2dWpoZnFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI1NjIyMDQsImV4cCI6MjAyODEzODIwNH0.U4EkffgNeKbhxKg-6QeeLvJ3HpgPBvIO6fRg0sGnat4",
  {
    realtime: {
      params: {
        eventsPerSecond: 10,
      },
    },
  }
);
