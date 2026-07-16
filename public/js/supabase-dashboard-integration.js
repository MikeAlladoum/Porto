/**
 * Supabase Dashboard Integration Layer
 * Bascule automatiquement entre localStorage (fallback) et Supabase
 * 
 * Usage: 
 * 1. Les fonctions de CRUD du dashboard restent exactement les mêmes
 * 2. Ce script les remplace pour utiliser Supabase en arrière-plan
 */

// Configuration flag
let USE_SUPABASE = false;
let supabaseReady = false;

// Initialize Supabase integration
async function initSupabaseIntegration() {
    try {
        // Attendre que supabaseAPI soit disponible
        if (typeof window.supabaseAPI === 'undefined') {
            console.warn('⚠️ Supabase API pas disponible, utilisation de localStorage');
            USE_SUPABASE = false;
            return false;
        }

        // Initialiser le client Supabase
        if (!window.supabaseAPI.init()) {
            console.warn('⚠️ Supabase init échoué, utilisation de localStorage');
            USE_SUPABASE = false;
            return false;
        }

        USE_SUPABASE = true;
        supabaseReady = true;
        console.log('✅ Supabase Integration Active');
        return true;
    } catch (error) {
        console.error('Erreur Supabase init:', error);
        USE_SUPABASE = false;
        return false;
    }
}

// ============ PROJECTS ============
async function getProjectsData() {
    if (USE_SUPABASE && supabaseReady) {
        try {
            return await window.supabaseAPI.projects.get() || [];
        } catch (error) {
            console.error('Erreur getProjects Supabase:', error);
            return JSON.parse(localStorage.getItem('projects') || '[]');
        }
    }
    return JSON.parse(localStorage.getItem('projects') || '[]');
}

async function saveProjectsData(projects) {
    if (USE_SUPABASE && supabaseReady) {
        try {
            // Pour Supabase, on synchronise chaque projet individuellement
            for (const project of projects) {
                if (project.id && typeof project.id === 'number') {
                    // Existe déjà dans Supabase
                    await window.supabaseAPI.projects.update(project.id, project);
                } else if (!project.id || typeof project.id === 'string') {
                    // Nouveau projet (ID temporaire string)
                    const newProject = { ...project };
                    delete newProject.id; // Supprimer l'ID temporaire
                    const result = await window.supabaseAPI.projects.create(newProject);
                    // Mettre à jour l'ID local
                    if (result && result.id) {
                        project.id = result.id;
                    }
                }
            }
        } catch (error) {
            console.error('Erreur saveProjects Supabase:', error);
            localStorage.setItem('projects', JSON.stringify(projects));
        }
    } else {
        localStorage.setItem('projects', JSON.stringify(projects));
    }
}

// ============ CERTIFICATES ============
async function getCertificatesData() {
    if (USE_SUPABASE && supabaseReady) {
        try {
            return await window.supabaseAPI.certifications.get() || [];
        } catch (error) {
            console.error('Erreur getCertificates Supabase:', error);
            return JSON.parse(localStorage.getItem('certificates') || '[]');
        }
    }
    return JSON.parse(localStorage.getItem('certificates') || '[]');
}

async function saveCertificatesData(certificates) {
    if (USE_SUPABASE && supabaseReady) {
        try {
            for (const cert of certificates) {
                if (cert.id && typeof cert.id === 'number') {
                    await window.supabaseAPI.certifications.update(cert.id, cert);
                } else if (!cert.id || typeof cert.id === 'string') {
                    const newCert = { ...cert };
                    delete newCert.id;
                    const result = await window.supabaseAPI.certifications.create(newCert);
                    if (result && result.id) {
                        cert.id = result.id;
                    }
                }
            }
        } catch (error) {
            console.error('Erreur saveCertificates Supabase:', error);
            localStorage.setItem('certificates', JSON.stringify(certificates));
        }
    } else {
        localStorage.setItem('certificates', JSON.stringify(certificates));
    }
}

// ============ EDUCATION ============
async function getEducationData() {
    if (USE_SUPABASE && supabaseReady) {
        try {
            return await window.supabaseAPI.education.get() || [];
        } catch (error) {
            console.error('Erreur getEducation Supabase:', error);
            return JSON.parse(localStorage.getItem('education') || '[]');
        }
    }
    return JSON.parse(localStorage.getItem('education') || '[]');
}

async function saveEducationData(education) {
    if (USE_SUPABASE && supabaseReady) {
        try {
            for (const edu of education) {
                if (edu.id && typeof edu.id === 'number') {
                    await window.supabaseAPI.education.update(edu.id, edu);
                } else if (!edu.id || typeof edu.id === 'string') {
                    const newEdu = { ...edu };
                    delete newEdu.id;
                    const result = await window.supabaseAPI.education.create(newEdu);
                    if (result && result.id) {
                        edu.id = result.id;
                    }
                }
            }
        } catch (error) {
            console.error('Erreur saveEducation Supabase:', error);
            localStorage.setItem('education', JSON.stringify(education));
        }
    } else {
        localStorage.setItem('education', JSON.stringify(education));
    }
}

// ============ CVS ============
async function getCVsData() {
    if (USE_SUPABASE && supabaseReady) {
        try {
            return await window.supabaseAPI.cvs.get() || [];
        } catch (error) {
            console.error('Erreur getCVs Supabase:', error);
            return JSON.parse(localStorage.getItem('cvs') || '[]');
        }
    }
    return JSON.parse(localStorage.getItem('cvs') || '[]');
}

async function saveCVsData(cvs) {
    if (USE_SUPABASE && supabaseReady) {
        try {
            for (const cv of cvs) {
                if (cv.id && typeof cv.id === 'number') {
                    await window.supabaseAPI.cvs.update(cv.id, cv);
                } else if (!cv.id || typeof cv.id === 'string') {
                    const newCV = { ...cv };
                    delete newCV.id;
                    const result = await window.supabaseAPI.cvs.create(newCV);
                    if (result && result.id) {
                        cv.id = result.id;
                    }
                }
            }
        } catch (error) {
            console.error('Erreur saveCVs Supabase:', error);
            localStorage.setItem('cvs', JSON.stringify(cvs));
        }
    } else {
        localStorage.setItem('cvs', JSON.stringify(cvs));
    }
}

// ============ TESTIMONIALS ============
async function getTestimonialsData() {
    if (USE_SUPABASE && supabaseReady) {
        try {
            return await window.supabaseAPI.testimonials.get() || [];
        } catch (error) {
            console.error('Erreur getTestimonials Supabase:', error);
            return JSON.parse(localStorage.getItem('testimonials') || '[]');
        }
    }
    return JSON.parse(localStorage.getItem('testimonials') || '[]');
}

async function saveTestimonialsData(testimonials) {
    if (USE_SUPABASE && supabaseReady) {
        try {
            for (const testimonial of testimonials) {
                if (testimonial.id && typeof testimonial.id === 'number') {
                    await window.supabaseAPI.testimonials.update(testimonial.id, testimonial);
                } else if (!testimonial.id || typeof testimonial.id === 'string') {
                    const newTestimonial = { ...testimonial };
                    delete newTestimonial.id;
                    const result = await window.supabaseAPI.testimonials.create(newTestimonial);
                    if (result && result.id) {
                        testimonial.id = result.id;
                    }
                }
            }
        } catch (error) {
            console.error('Erreur saveTestimonials Supabase:', error);
            localStorage.setItem('testimonials', JSON.stringify(testimonials));
        }
    } else {
        localStorage.setItem('testimonials', JSON.stringify(testimonials));
    }
}

// ============ ANALYTICS ============
async function getAnalyticsData() {
    if (USE_SUPABASE && supabaseReady) {
        try {
            const analytics = await window.supabaseAPI.analytics.get();
            return analytics || {};
        } catch (error) {
            console.error('Erreur getAnalytics Supabase:', error);
            return JSON.parse(localStorage.getItem('analytics') || '{}');
        }
    }
    return JSON.parse(localStorage.getItem('analytics') || '{}');
}

async function saveAnalyticsData(analytics) {
    if (USE_SUPABASE && supabaseReady) {
        try {
            await window.supabaseAPI.analytics.update(analytics);
        } catch (error) {
            console.error('Erreur saveAnalytics Supabase:', error);
            localStorage.setItem('analytics', JSON.stringify(analytics));
        }
    } else {
        localStorage.setItem('analytics', JSON.stringify(analytics));
    }
}

// Status
console.log('✅ Supabase Integration Layer Loaded');
console.log('📌 Initializing Supabase...');

// Initialize when ready
window.addEventListener('load', async () => {
    await initSupabaseIntegration();
});
