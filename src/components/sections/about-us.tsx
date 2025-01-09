'use client';

import { Section } from '@/components/ui/section';
import { motion } from 'framer-motion';
import CloudinaryImage from '../cloudinary-image';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const imageVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8 },
};

export default function AboutUs() {
  return (
    <Section id="about" variant="default" className="overflow-hidden py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          {/* Left side - Content */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-2xl space-y-6"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="h-px w-8 bg-primary"></span>
                <span className="text-sm font-medium uppercase tracking-wider">
                  Welcome to M3M Antalya Hills
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                Where Nature Meets
                <span className="block mt-2 text-primary">
                  Tranquility & Luxury
                </span>
              </h2>
            </div>

            <div className="prose prose-lg text-muted-foreground space-y-5">
              <p className="leading-relaxed">
                Step into M3M Antalya Hills, a place where nature meets
                tranquillity and luxury. Surrounded by stunning vistas and rich
                landscapes that inspire harmony and calm, our community is a
                haven meant for individuals looking for a quiet living
                environment. M3M Antalya Hill, tucked away in a prominent
                position, provides easy access to lively commercial centres,
                respected universities, and leisure activities, thus ideal for
                families, businesses, and everyone trying to lead a balanced
                life.
              </p>

              <div className="bg-primary/5 p-5 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Thoughtfully Designed Living Spaces
                </h3>
                <p className="text-gray-600">
                  Our carefully crafted floor designs provide roomy 1, 2, and
                  3-bedroom apartments to fit a range of living situations.
                  Every apartment is painstakingly built with contemporary
                  conveniences like private balconies with breathtaking views of
                  the surrounding scenery, beautiful living areas inviting
                  plenty of natural light, and fully outfitted kitchens with
                  high-end equipment. The interiors feature a plethora of modern
                  finishes and elegant accents, ensuring a sophisticated and
                  comfortable environment for every resident.
                </p>
              </div>

              <div className="bg-primary/5 p-5 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Premium Features & Well-being
                </h3>
                <p className="text-gray-600 mb-4">
                  Our first concern at M3M Antalya Hills is your well-being and
                  features of great quality meant to improve your way of life.
                  In our modern health centre, enjoy energising exercises, relax
                  in our cool swimming pool, or wander slowly over exquisitely
                  designed gardens offering ideal locations for social events
                  and relaxation.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary"></span>
                      Modern health centre
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary"></span>
                      Swimming pool
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary"></span>
                      Landscaped gardens
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary"></span>
                      24/7 security
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary"></span>
                      Safe parking
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary"></span>
                      Maintenance services
                    </li>
                  </ul>
                </div>
              </div>

              <p className="font-medium text-gray-900 bg-primary/5 p-4 rounded-lg">
                Witness the ideal mix of comfort, sophistication, and community
                spirit at M3M Antalya Hills. Our friendly surroundings are meant
                to satisfy your every need, whether your search is for a quiet
                haven or an active, connected lifestyle. Experience the
                unmatched beauty of M3M Antalya Hill right now; your dream house
                is waiting!
              </p>
            </div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={imageVariants}
            className="relative h-full"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <CloudinaryImage
                src="about_heipty"
                alt="M3M Antalya Hills Exterior"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
