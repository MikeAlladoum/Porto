// ============ SUPABASE CONFIGURATION ============
// Replace these with your actual Supabase credentials

const SUPABASE_URL = 'https://YOUR_PROJECT_ID.supabase.co';
const SUPABASE_ANON_KEY = 'YOUR_ANON_KEY_HERE';

// Initialize Supabase Client (loaded from CDN)
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ============ AUTHENTICATION HELPERS ============

async function supabaseLogin(email, password) {
    try {
        const { data, error } = await supabaseClient.auth.signInWithPassword({
            email: email,
            password: password,
        });
        if (error) throw error;
        return { success: true, user: data.user };
    } catch (error) {
        console.error('Login error:', error);
        return { success: false, error: error.message };
    }
}

async function supabaseLogout() {
    try {
        const { error } = await supabaseClient.auth.signOut();
        if (error) throw error;
        return { success: true };
    } catch (error) {
        console.error('Logout error:', error);
        return { success: false, error: error.message };
    }
}

async function supabaseCheckAuth() {
    try {
        const { data } = await supabaseClient.auth.getSession();
        return data.session ? { authenticated: true, user: data.session.user } : { authenticated: false };
    } catch (error) {
        console.error('Auth check error:', error);
        return { authenticated: false };
    }
}

// ============ PROJECTS OPERATIONS ============

async function supabaseGetProjects() {
    try {
        const { data, error } = await supabaseClient
            .from('projects')
            .select('*')
            .eq('archived', false)
            .order('created_at', { ascending: false });
        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error fetching projects:', error);
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
        return { success: true, data: data[0] };
    } catch (error) {
        console.error('Error creating project:', error);
        return { success: false, error: error.message };
    }
}

async function supabaseUpdateProject(id, project) {
    try {
        const { data, error } = await supabaseClient
            .from('projects')
            .update(project)
            .eq('id', id)
            .select();
        if (error) throw error;
        return { success: true, data: data[0] };
    } catch (error) {
        console.error('Error updating project:', error);
        return { success: false, error: error.message };
    }
}

async function supabaseDeleteProject(id) {
    try {
        const { error } = await supabaseClient
            .from('projects')
            .delete()
            .eq('id', id);
        if (error) throw error;
        return { success: true };
    } catch (error) {
        console.error('Error deleting project:', error);
        return { success: false, error: error.message };
    }
}

// ============ CERTIFICATIONS OPERATIONS ============

async function supabaseGetCertifications() {
    try {
        const { data, error } = await supabaseClient
            .from('certifications')
            .select('*')
            .eq('archived', false)
            .order('created_at', { ascending: false });
        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error fetching certifications:', error);
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
        return { success: true, data: data[0] };
    } catch (error) {
        console.error('Error creating certification:', error);
        return { success: false, error: error.message };
    }
}

async function supabaseUpdateCertification(id, cert) {
    try {
        const { data, error } = await supabaseClient
            .from('certifications')
            .update(cert)
            .eq('id', id)
            .select();
        if (error) throw error;
        return { success: true, data: data[0] };
    } catch (error) {
        console.error('Error updating certification:', error);
        return { success: false, error: error.message };
    }
}

async function supabaseDeleteCertification(id) {
    try {
        const { error } = await supabaseClient
            .from('certifications')
            .delete()
            .eq('id', id);
        if (error) throw error;
        return { success: true };
    } catch (error) {
        console.error('Error deleting certification:', error);
        return { success: false, error: error.message };
    }
}

// ============ EDUCATION OPERATIONS ============

async function supabaseGetEducation() {
    try {
        const { data, error } = await supabaseClient
            .from('education')
            .select('*')
            .eq('archived', false)
            .order('created_at', { ascending: false });
        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error fetching education:', error);
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
        return { success: true, data: data[0] };
    } catch (error) {
        console.error('Error creating education:', error);
        return { success: false, error: error.message };
    }
}

async function supabaseUpdateEducation(id, edu) {
    try {
        const { data, error } = await supabaseClient
            .from('education')
            .update(edu)
            .eq('id', id)
            .select();
        if (error) throw error;
        return { success: true, data: data[0] };
    } catch (error) {
        console.error('Error updating education:', error);
        return { success: false, error: error.message };
    }
}

async function supabaseDeleteEducation(id) {
    try {
        const { error } = await supabaseClient
            .from('education')
            .delete()
            .eq('id', id);
        if (error) throw error;
        return { success: true };
    } catch (error) {
        console.error('Error deleting education:', error);
        return { success: false, error: error.message };
    }
}

// ============ CVS OPERATIONS ============

async function supabaseGetCVs() {
    try {
        const { data, error } = await supabaseClient
            .from('cvs')
            .select('*')
            .order('created_at', { ascending: false });
        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error fetching CVs:', error);
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
        return { success: true, data: data[0] };
    } catch (error) {
        console.error('Error creating CV:', error);
        return { success: false, error: error.message };
    }
}

async function supabaseUpdateCV(id, cv) {
    try {
        const { data, error } = await supabaseClient
            .from('cvs')
            .update(cv)
            .eq('id', id)
            .select();
        if (error) throw error;
        return { success: true, data: data[0] };
    } catch (error) {
        console.error('Error updating CV:', error);
        return { success: false, error: error.message };
    }
}

async function supabaseDeleteCV(id) {
    try {
        const { error } = await supabaseClient
            .from('cvs')
            .delete()
            .eq('id', id);
        if (error) throw error;
        return { success: true };
    } catch (error) {
        console.error('Error deleting CV:', error);
        return { success: false, error: error.message };
    }
}

// ============ TESTIMONIALS OPERATIONS ============

async function supabaseGetTestimonials() {
    try {
        const { data, error } = await supabaseClient
            .from('testimonials')
            .select('*')
            .eq('archived', false)
            .order('created_at', { ascending: false });
        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error fetching testimonials:', error);
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
        return { success: true, data: data[0] };
    } catch (error) {
        console.error('Error creating testimonial:', error);
        return { success: false, error: error.message };
    }
}

async function supabaseUpdateTestimonial(id, testimonial) {
    try {
        const { data, error } = await supabaseClient
            .from('testimonials')
            .update(testimonial)
            .eq('id', id)
            .select();
        if (error) throw error;
        return { success: true, data: data[0] };
    } catch (error) {
        console.error('Error updating testimonial:', error);
        return { success: false, error: error.message };
    }
}

async function supabaseDeleteTestimonial(id) {
    try {
        const { error } = await supabaseClient
            .from('testimonials')
            .delete()
            .eq('id', id);
        if (error) throw error;
        return { success: true };
    } catch (error) {
        console.error('Error deleting testimonial:', error);
        return { success: false, error: error.message };
    }
}

// ============ ANALYTICS OPERATIONS ============

async function supabaseGetAnalytics() {
    try {
        const { data, error } = await supabaseClient
            .from('analytics')
            .select('*')
            .limit(1)
            .single();
        if (error && error.code !== 'PGRST116') throw error;
        return data || null;
    } catch (error) {
        console.error('Error fetching analytics:', error);
        return null;
    }
}

async function supabaseUpdateAnalytics(analytics) {
    try {
        const existing = await supabaseGetAnalytics();
        if (existing) {
            const { data, error } = await supabaseClient
                .from('analytics')
                .update(analytics)
                .eq('id', existing.id)
                .select();
            if (error) throw error;
            return { success: true, data: data[0] };
        } else {
            const { data, error } = await supabaseClient
                .from('analytics')
                .insert([analytics])
                .select();
            if (error) throw error;
            return { success: true, data: data[0] };
        }
    } catch (error) {
        console.error('Error updating analytics:', error);
        return { success: false, error: error.message };
    }
}

// ============ SYNC HELPERS ============

// Sync localStorage to Supabase
async function syncLocalStorageToSupabase() {
    try {
        console.log('🔄 Syncing localStorage to Supabase...');
        
        // Sync projects
        const projects = JSON.parse(localStorage.getItem('adminProjects') || '[]');
        for (const project of projects) {
            await supabaseCreateProject(project);
        }
        
        // Sync certifications
        const certs = JSON.parse(localStorage.getItem('adminCertificates') || '[]');
        for (const cert of certs) {
            await supabaseCreateCertification(cert);
        }
        
        // Sync education
        const education = JSON.parse(localStorage.getItem('adminEducation') || '[]');
        for (const edu of education) {
            await supabaseCreateEducation(edu);
        }
        
        // Sync CVs
        const cvs = JSON.parse(localStorage.getItem('adminCVs') || '[]');
        for (const cv of cvs) {
            await supabaseCreateCV(cv);
        }
        
        // Sync testimonials
        const testimonials = JSON.parse(localStorage.getItem('adminTestimonials') || '[]');
        for (const testimonial of testimonials) {
            await supabaseCreateTestimonial(testimonial);
        }
        
        // Sync analytics
        const analytics = JSON.parse(localStorage.getItem('adminAnalytics') || '{}');
        await supabaseUpdateAnalytics(analytics);
        
        console.log('✅ Sync complete!');
        return { success: true };
    } catch (error) {
        console.error('Sync error:', error);
        return { success: false, error: error.message };
    }
}

// Export functions
window.supabaseAPI = {
    // Auth
    login: supabaseLogin,
    logout: supabaseLogout,
    checkAuth: supabaseCheckAuth,
    
    // Projects
    getProjects: supabaseGetProjects,
    createProject: supabaseCreateProject,
    updateProject: supabaseUpdateProject,
    deleteProject: supabaseDeleteProject,
    
    // Certifications
    getCertifications: supabaseGetCertifications,
    createCertification: supabaseCreateCertification,
    updateCertification: supabaseUpdateCertification,
    deleteCertification: supabaseDeleteCertification,
    
    // Education
    getEducation: supabaseGetEducation,
    createEducation: supabaseCreateEducation,
    updateEducation: supabaseUpdateEducation,
    deleteEducation: supabaseDeleteEducation,
    
    // CVs
    getCVs: supabaseGetCVs,
    createCV: supabaseCreateCV,
    updateCV: supabaseUpdateCV,
    deleteCV: supabaseDeleteCV,
    
    // Testimonials
    getTestimonials: supabaseGetTestimonials,
    createTestimonial: supabaseCreateTestimonial,
    updateTestimonial: supabaseUpdateTestimonial,
    deleteTestimonial: supabaseDeleteTestimonial,
    
    // Analytics
    getAnalytics: supabaseGetAnalytics,
    updateAnalytics: supabaseUpdateAnalytics,
    
    // Sync
    syncLocalStorageToSupabase: syncLocalStorageToSupabase
};

console.log('✅ Supabase API loaded successfully!');
