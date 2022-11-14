const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';

// assemble client
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getBeanies(sign) {
    // assemble query for signs
    let query = client.from('beanie_babies').select('*').order('title').limit(100);
    if (sign) {
        query = query.eq('sign', sign);
    }
    const response = await query;
    return response;
}

export async function getSigns() {
    const query = client.from('beanie_baby_astro_signs').select('*');
    return await query;
}
