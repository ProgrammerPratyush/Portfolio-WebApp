import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code2, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export function CodingProfiles() {
  const profiles = [
    {
      platform: 'LeetCode',
      url: 'https://leetcode.com/u/ppurigoswami2002/',
      icon: Code2,
    },
    {
      platform: 'HackerRank',
      url: 'https://www.hackerrank.com/profile/ppurigoswami2002',
      icon: Award,
    },
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-foreground">My Coding Profiles</h2>
      <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto">
        {profiles.map((profile, index) => (
          <motion.div
            key={profile.platform}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="w-full"
          >
            <Card className="hover:shadow-lg transition-shadow bg-gradient-to-r from-background to-accent/10">
              <CardHeader className="flex flex-row items-center gap-4">
                <profile.icon className="h-8 w-8 text-primary" />
                <CardTitle className="text-foreground">{profile.platform}</CardTitle>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  variant="outline"
                  className="w-full hover:scale-105 transition-transform text-foreground hover:text-primary"
                >
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base"
                  >
                    View Profile
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}