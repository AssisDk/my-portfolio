export const dynamic = 'force-dynamic';


export interface Projekt {
  id: number;
  titel: string;
  beskrivelse: string;
  status: string;
  tags: string;
}

const API_URL = process.env.API_URL;

export async function getProjekter(): Promise<Projekt[]> {
  try {
    const res = await fetch(`${API_URL}/Projekter`, {
      cache: 'no-store' 
    });

    if (!res.ok) {
      throw new Error(`Kunne ikke hente projekter: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Fejl ved hentning af projekter:", error);
    return []; 
  }
}