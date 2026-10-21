
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const BASE_URL = "https://calcnesthub.vercel.app";
const SEO = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        if (pathname.startsWith("/calculators/")) return;
        const canonicalPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
        const canonicalUrl = `${BASE_URL}${canonicalPath}`;
        let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement("link");
            canonical.rel = "canonical";
            document.head.appendChild(canonical);
        }
        canonical.href = canonicalUrl;
        const ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
        if (ogUrl) ogUrl.content = canonicalUrl;
    }, [pathname]);
    return null;
};
export default SEO;
