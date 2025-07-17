import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
     return {
          name: "News Globe",
          short_name: "News Globe",
          description:
               "News Globe is a global news application that allows users to explore the latest headlines, trending topics, and breaking news from around the world. Browse news by category, search for specific topics, and stay informed with real-time updates — all in a fast, responsive, and easy-to-use interface.",
          start_url: "/",
          display: "standalone",
          background_color: "#000",
          theme_color: "#000",
          icons: [
               {
                    src: "FeatureArticle_FallBack.webp",
                    sizes: "16x16",
                    type: "image/png",
               },
               {
                    src: "FeatureArticle_FallBack.webp",
                    sizes: "32x32",
                    type: "image/png",
               },
               {
                    src: "FeatureArticle_FallBack.webp",
                    sizes: "48x48",
                    type: "image/png",
               },
               {
                    src: "FeatureArticle_FallBack.webp",
                    sizes: "76x76",
                    type: "image/png",
               },
               {
                    src: "FeatureArticle_FallBack.webp",
                    sizes: "120x120",
                    type: "image/png",
               },
               {
                    src: "FeatureArticle_FallBack.webp",
                    sizes: "192x192",
                    type: "image/png",
               },
               {
                    src: "FeatureArticle_FallBack.webp",
                    sizes: "512x512",
                    type: "image/png",
               },
          ],
     };
}
