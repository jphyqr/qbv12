'use client'

import { useEffect } from "react"
import Cube from "@/components/cube"
import Floor from "@/components/floor";
export default function Home() {


    useEffect(() => {
        const fetchSitemap = async () => {
          try {
            const response = await fetch("http://localhost:3000/sitemap.xml");
            if (!response.ok) {
              throw new Error("Failed to fetch sitemap");
            }
            const sitemapText = await response.text();
            console.log(sitemapText);
          } catch (error) {
            console.error("Error fetching sitemap:", error);
          }
        };
    
        fetchSitemap();
      }, []);

  return (


  <div><Cube/>

  </div>

)
}


