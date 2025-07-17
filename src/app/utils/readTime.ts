export const handleCalculateReadTime = (content: string | null | undefined): number | null => {
     if (!content || typeof content !== "string") return null;

     const AVERAGE_READTIME_OF_HUMAN = 238; 
     const wordMatches = content.match(/\b\w+\b/g);
     const wordCount = wordMatches?.length || 0;

     const readTime = wordCount / AVERAGE_READTIME_OF_HUMAN;

     const minutes = Math.floor(readTime);
     const seconds = Math.round((readTime - minutes) * 60);

     return seconds > 30 || minutes === 0 ? minutes + 1 : minutes;
};
