/**
 * Supabase Configuration - supabase-config.js
 * À charger dans public/admin/dashboard.html
 */

// Configuration Supabase
const SUPABASE_CONFIG = {
    url: 'https://dnkgpfgrumkkzrjhzszk.supabase.co',
    anonKey: 'sb_publishable_ZuoYvngQ5GULD28Ih4ulAg_o00GrBzd'
};

// Initialize Supabase Client (après avoir chargé la libraire CDN)
let supabaseClient = null;

function initSupabase() {
    if (typeof supabase === 'undefined') {
        console.error('❌ Supabase SDK non chargé! Vérifie que la CDN est dans le HTML');
        return false;
    }

    const { createClient } = supabase;
    supabaseClient = createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
    console.log('✅ Supabase Client initialisé');
    return true;
}

/**
 * PROJECTS - CRUD Operations
 */

async function supabaseGetProjects() {
    try {
        const { data, error } = await supabaseClient
            .from('projects')
            .select('*')
            .eq('archived', false)
            .order('created_at', { ascending: false });

        if (error) throw error;
        return data || [];
    } catch (error) {
        console.error('Erreur fetch projects:', error.message);
        return [];
    }
}

async function supabaseCreateProject(project) {
    try {
        const { data, error } = await supabaseClient
            .from('projects')
            .insert([project])
            .select();

        if (error) throw error;
        console.log('✅ Projet créé:', data);
        return data[0];
    } catch (error) {
        console.error('Erreur création projet:', error.message);
        return null;
    }
}

async function supabaseUpdateProject(id, updates) {
    try {
        const { data, error } = await supabaseClient
            .from('projects')
            .update(updates)
            .eq('id', id)
            .select();

        if (error) throw error;
        console.log('✅ Projet mis à jour:', data);
        return data[0];
    } catch (error) {
        console.error('Erreur update projet:', error.message);
        return null;
    }
}

async function supabaseDeleteProject(id) {
    try {
        const { error } = await supabaseClient
            .from('projects')
            .delete()
            .eq('id', id);

        if (error) throw error;
        console.log('✅ Projet supprimé');
        return true;
    } catch (error) {
        console.error('Erreur suppression projet:', error.message);
        return false;
    }
}

/**
 * CERTIFICATIONS - CRUD Operations
 */

async function supabaseGetCertifications() {
    try {
        const { data, error } = await supabaseClient
            .from('certifications')
            .select('*')
            .eq('archived', false)
            .order('created_at', { ascending: false });

        if (error) throw error;
        return data || [];
    } catch (error) {
        console.error('Erreur fetch certifications:', error.message);
        return [];
    }
}

async function supabaseCreateCertification(cert) {
    try {
        const { data, error } = await supabaseClient
            .from('certifications')
            .insert([cert])
            .select();

        if (error) throw error;
        console.log('✅ Certification créée:', data);
        return data[0];
    } catch (error) {
        console.error('Erreur création certification:', error.message);
        return null;
    }
}

async function supabaseUpdateCertification(id, updates) {
    try {
        const { data, error } = await supabaseClient
            .from('certifications')
            .update(updates)
            .eq('id', id)
            .select();

        if (error) throw error;
        console.log('✅ Certification mise à jour:', data);
        return data[0];
    } catch (error) {
        console.error('Erreur update certification:', error.message);
        return null;
    }
}

async function supabaseDeleteCertification(id) {
    try {
        const { error } = await supabaseClient
            .from('certifications')
            .delete()
            .eq('id', id);

        if (error) throw error;
        console.log('✅ Certification supprimée');
        return true;
    } catch (error) {
        console.error('Erreur suppression certification:', error.message);
        return false;
    }
}

/**
 * EDUCATION - CRUD Operations
 */

async function supabaseGetEducation() {
    try {
        const { data, error } = await supabaseClient
            .from('education')
            .select('*')
            .eq('archived', false)
            .order('created_at', { ascending: false });

        if (error) throw error;
        return data || [];
    } catch (error) {
        console.error('Erreur fetch education:', error.message);
        return [];
    }
}

async function supabaseCreateEducation(edu) {
    try {
        const { data, error } = await supabaseClient
            .from('education')
            .insert([edu])
            .select();

        if (error) throw error;
        console.log('✅ Éducation créée:', data);
        return data[0];
    } catch (error) {
        console.error('Erreur création éducation:', error.message);
        return null;
    }
}

async function supabaseUpdateEducation(id, updates) {
    try {
        const { data, error } = await supabaseClient
            .from('education')
            .update(updates)
            .eq('id', id)
            .select();

        if (error) throw error;
        console.log('✅ Éducation mise à jour:', data);
        return data[0];
    } catch (error) {
        console.error('Erreur update éducation:', error.message);
        return null;
    }
}

async function supabaseDeleteEducation(id) {
    try {
        const { error } = await supabaseClient
            .from('education')
            .delete()
            .eq('id', id);

        if (error) throw error;
        console.log('✅ Éducation supprimée');
        return true;
    } catch (error) {
        console.error('Erreur suppression éducation:', error.message);
        return false;
    }
}

/**
 * CVS - CRUD Operations
 */

async function supabaseGetCVs() {
    try {
        const { data, error } = await supabaseClient
            .from('cvs')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;
        return data || [];
    } catch (error) {
        console.error('Erreur fetch CVs:', error.message);
        return [];
    }
}

async function supabaseCreateCV(cv) {
    try {
        const { data, error } = await supabaseClient
            .from('cvs')
            .insert([cv])
            .select();

        if (error) throw error;
        console.log('✅ CV créé:', data);
        return data[0];
    } catch (error) {
        console.error('Erreur création CV:', error.message);
        return null;
    }
}

async function supabaseUpdateCV(id, updates) {
    try {
        const { data, error } = await supabaseClient
            .from('cvs')
            .update(updates)
            .eq('id', id)
            .select();

        if (error) throw error;
        console.log('✅ CV mis à jour:', data);
        return data[0];
    } catch (error) {
        console.error('Erreur update CV:', error.message);
        return null;
    }
}

async function supabaseDeleteCV(id) {
    try {
        const { error } = await supabaseClient
            .from('cvs')
            .delete()
            .eq('id', id);

        if (error) throw error;
        console.log('✅ CV supprimé');
        return true;
    } catch (error) {
        console.error('Erreur suppression CV:', error.message);
        return false;
    }
}

/**
 * TESTIMONIALS - CRUD Operations
 */

async function supabaseGetTestimonials() {
    try {
        const { data, error } = await supabaseClient
            .from('testimonials')
            .select('*')
            .eq('archived', false)
            .eq('status', 'approved')
            .order('created_at', { ascending: false });

        if (error) throw error;
        return data || [];
    } catch (error) {
        console.error('Erreur fetch testimonials:', error.message);
        return [];
    }
}

async function supabaseGetPendingTestimonials() {
    try {
        const { data, error } = await supabaseClient
            .from('testimonials')
            .select('*')
            .eq('status', 'pending')
            .order('created_at', { ascending: false });

        if (error) throw error;
        return data || [];
    } catch (error) {
        console.error('Erreur fetch pending testimonials:', error.message);
        return [];
    }
}

async function supabaseCreateTestimonial(testimonial) {
    try {
        const { data, error } = await supabaseClient
            .from('testimonials')
            .insert([testimonial])
            .select();

        if (error) throw error;
        console.log('✅ Testimonial créé:', data);
        return data[0];
    } catch (error) {
        console.error('Erreur création testimonial:', error.message);
        return null;
    }
}

async function supabaseUpdateTestimonial(id, updates) {
    try {
        const { data, error } = await supabaseClient
            .from('testimonials')
            .update(updates)
            .eq('id', id)
            .select();

        if (error) throw error;
        console.log('✅ Testimonial mis à jour:', data);
        return data[0];
    } catch (error) {
        console.error('Erreur update testimonial:', error.message);
        return null;
    }
}

async function supabaseApproveTestimonial(id) {
    return supabaseUpdateTestimonial(id, { status: 'approved' });
}

async function supabaseRejectTestimonial(id) {
    return supabaseUpdateTestimonial(id, { status: 'rejected' });
}

async function supabaseDeleteTestimonial(id) {
    try {
        const { error } = await supabaseClient
            .from('testimonials')
            .delete()
            .eq('id', id);

        if (error) throw error;
        console.log('✅ Testimonial supprimé');
        return true;
    } catch (error) {
        console.error('Erreur suppression testimonial:', error.message);
        return false;
    }
}

/**
 * ANALYTICS - CRUD Operations
 */

async function supabaseGetAnalytics() {
    try {
        const { data, error } = await supabaseClient
            .from('analytics')
            .select('*')
            .single();

        if (error && error.code !== 'PGRST116') throw error;
        return data || { page_views: 0, cv_downloads: 0, unique_visitors: 0 };
    } catch (error) {
        console.error('Erreur fetch analytics:', error.message);
        return { page_views: 0, cv_downloads: 0, unique_visitors: 0 };
    }
}

async function supabaseUpdateAnalytics(updates) {
    try {
        const analytics = await supabaseGetAnalytics();
        
        if (!analytics.id) {
            // Créer un nouveau record si n'existe pas
            const { data, error } = await supabaseClient
                .from('analytics')
                .insert([updates])
                .select();

            if (error) throw error;
            return data[0];
        } else {
            // Update existant
            const { data, error } = await supabaseClient
                .from('analytics')
                .update(updates)
                .eq('id', analytics.id)
                .select();

            if (error) throw error;
            return data[0];
        }
    } catch (error) {
        console.error('Erreur update analytics:', error.message);
        return null;
    }
}

/**
 * SYNCHRONISATION - localStorage ↔ Supabase
 */

async function syncLocalStorageToSupabase() {
    console.log('🔄 Synchronisation localStorage → Supabase...\n');

    try {
        // Migrate Projects
        const projects = JSON.parse(localStorage.getItem('projects') || '[]');
        for (const project of projects) {
            await supabaseCreateProject(project);
        }
        console.log(`✅ ${projects.length} projects migrés`);

        // Migrate Certifications
        const certifications = JSON.parse(localStorage.getItem('certifications') || '[]');
        for (const cert of certifications) {
            await supabaseCreateCertification(cert);
        }
        console.log(`✅ ${certifications.length} certifications migrées`);

        // Migrate Education
        const education = JSON.parse(localStorage.getItem('education') || '[]');
        for (const edu of education) {
            await supabaseCreateEducation(edu);
        }
        console.log(`✅ ${education.length} éducations migrées`);

        // Migrate CVs
        const cvs = JSON.parse(localStorage.getItem('cvs') || '[]');
        for (const cv of cvs) {
            await supabaseCreateCV(cv);
        }
        console.log(`✅ ${cvs.length} CVs migrés`);

        // Migrate Testimonials
        const testimonials = JSON.parse(localStorage.getItem('testimonials') || '[]');
        for (const testimonial of testimonials) {
            await supabaseCreateTestimonial(testimonial);
        }
        console.log(`✅ ${testimonials.length} testimonials migrés\n`);

        console.log('✅ Synchronisation complète!');
        return true;
    } catch (error) {
        console.error('❌ Erreur synchronisation:', error.message);
        return false;
    }
}

/**
 * Export pour utilisation globale
 */
window.supabaseAPI = {
    init: initSupabase,
    projects: {
        get: supabaseGetProjects,
        create: supabaseCreateProject,
        update: supabaseUpdateProject,
        delete: supabaseDeleteProject
    },
    certifications: {
        get: supabaseGetCertifications,
        create: supabaseCreateCertification,
        update: supabaseUpdateCertification,
        delete: supabaseDeleteCertification
    },
    education: {
        get: supabaseGetEducation,
        create: supabaseCreateEducation,
        update: supabaseUpdateEducation,
        delete: supabaseDeleteEducation
    },
    cvs: {
        get: supabaseGetCVs,
        create: supabaseCreateCV,
        update: supabaseUpdateCV,
        delete: supabaseDeleteCV
    },
    testimonials: {
        get: supabaseGetTestimonials,
        getPending: supabaseGetPendingTestimonials,
        create: supabaseCreateTestimonial,
        update: supabaseUpdateTestimonial,
        approve: supabaseApproveTestimonial,
        reject: supabaseRejectTestimonial,
        delete: supabaseDeleteTestimonial
    },
    analytics: {
        get: supabaseGetAnalytics,
        update: supabaseUpdateAnalytics
    },
    sync: {
        fromLocalStorage: syncLocalStorageToSupabase
    }
};

console.log('✅ Supabase API Loaded');
