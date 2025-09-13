// Home  // Blog items 
"use client";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
   const BlogCards = [
    {
      id: "1",
      title: "Shami Kabab Garlic Rice",
      src: "/images/shami-kabab.jpg",
      detail: "A fusion of flavorful Shami Kababs paired with Chilli Garlic Rice.",
      description:"To make Shami Kababs, start by boiling 500g of beef or chickenmince with 1/2 cup of chana dal, chopped onion, garlic, ginger,green chilies, and spices like cumin seeds, coriander powder, red chili powder, turmeric, and salt until the meat is tender and the wateris absorbed. Once cooled, grind the mixture into a smooth paste, add garam masala powder and fresh coriander, and bind it with a beaten egg. Shape themixture into patties and shallow fry them until golden brown. For the Chilli Garlic Rice, cook 1 cup of basmati rice and set aside. In a pan, sauté chopped onion, garlic, and green chilies in oil until fragrant, then add soy sauce, red chili flakes, black pepper, and salt. Mix the cooked rice with this spicy garlic mixture and garnish with fresh coriander. Serve the Shami Kababs with the Chilli Garlic Rice for a flavorful meal."
    },
    {
      id: "2",
      title: "Cheesy Seekh Kabab",
      src: "/images/seekh-kabab.png",
      detail: "A perfect blend of cheesy seekh kabab and crispy spring rolls.",
      description:"To make Cheesy Seekh Kabab Spring Rolls, start by preparing the seekh kebabs.Mix 500g of minced beef or chicken with finely chopped onions, garlic, ginger,green chilies, coriander powder, cumin powder, red chili powder, garam masala,and salt. Add some breadcrumbs and a beaten egg to bind the mixture together.Shape the mixture onto skewers and grill or pan-fry until fully cooked. Once done, remove the seekh kebabs from the skewers and set aside."

    },
    {
      id: "3",
      title: "Beef Pulao Recipe",
      src: "/images/Beef-Pulao.png",
      detail: "A flavorful and aromatic beef pulao to enjoy with family.",
      description:"To make Beef Pulao, heat oil in a pot and sauté whole spices like cinnamon,cloves, and cardamom. Add 1 kg beef cubes and brown them. Set aside. In the same pot, sauté onions until golden, then add ginger-garlic paste and chopped tomatoes. Stir in cumin, coriander, garam masala, chili powder, and salt. Add the beef back with water, simmer until tender. Rinse 2 cups basmati rice and add it to the pot with water. Cook until rice is done. Garnish with fried onions and serve!."
    },
    {
      id: "4",
      title: "Oriental Chicken & Pasta",
      src: "/images/quick-pasta.jpg",
      detail: "A delicious blend of chicken and pasta with oriental spices.",
      description:" In a pan, heat oil and sauté 1 chopped onion, 2 garlic cloves, and 1 diced chicken breast until the chicken is cooked through. Add 1 tablespoon soy sauce,1teaspoon vinegar, and a pinch of sugar. Stir in cooked pasta, and season withsalt, pepper, and chili flakes. Garnish with green onions and sesame seeds.Serve hot!"

    },
    {
      id: "5",
      title: "Boneless Chicken Karahi",
      src: "/images/chicken-karahi.jpg",
      detail: "A flavorful dish with tender boneless chicken,perfect meal.",
      descripton:"To make Boneless Chicken Karahi, heat oil in a pan, and sauté onions until golden. Add ginger and garlic paste, followed by boneless chicken pieces.Cook until chicken is tender. Stir in tomatoes, green chilies, and spices (like cumin, coriander, and garam masala). Let it simmer until the gravy thickens. Garnish with fresh coriander and serve hot with naan or rice."
    },
    {
      id: "6",
      title: "Dhaba Fish Curry",
      src: "/images/Dhaba-Fish.jpg",
      detail: "A traditional Dhaba-style fish curry, rich in spices and flavor.",
      description:"To prepare Dhaba Fish Curry, marinate fish pieces with turmeric, red chili powder, and salt, then shallow-fry until golden. In a pan, heat oil and sauté onions until golden brown, adding ginger-garlic paste and chopped tomatoes to create a rich masala. Blend in cumin, coriander, and garam masala, cooking until the oil separates. Add water to make a curry base, then gently add the fried fish, simmering for a few minutes to let the flavors infuse. Garnish with fresh coriander and serve hot with steamed rice or naan."
    },
    {
      id: "7",
      title: "Qeema Bhindi Fry",
      src: "/images/Qeema-Bhindii.jpg",
      detail: "A flavorful combination of meat and crispy okra,Perfect spices.",
      description:"A savory combination of minced meat and crispy okra, cooked with aromatic spices To prepare Qeema Bhindi Fry, heat oil in a pan and sauté sliced onions until golden brown. Add 500g of minced meat (qeema) and cook until it changes color.Stir in ginger-garlic paste, salt, red chili powder, turmeric, and garam masala.Cook for 10-15 minutes, stirring occasionally. Separately, fry 200g of okra (bhindi) until lightly crispy, then mix it with the cooked minced meat. Simmer for a few minutes to let the flavors combine. Serve hot with naan or chapati."
    },
    
    {
      id: "8",
      title: "Murgh Musallam",
      src: "/images/MURGH-MUSALLAM.jpg",
      detail: "A flavorful whole chicken cooked in a rich and aromatic gravy",
      description:"To make Murgh Musallam, marinate a whole chicken with yogurt, ginger-garlic paste, turmeric, red chili powder, and salt for at least an hour. Prepare a rich masala by sautéing onions, tomatoes, cashew paste, and a blend of spices like cumin, coriander, and garam masala in ghee. Stuff the marinated chicken with boiled eggs and cooked rice or nuts, then roast it in the masala, basting frequently with the gravy. Simmer until the chicken is tender and fully cooked.Garnish with fresh coriander and serve with naan or steamed rice."


    },

  ];

  return (
    <div className="flex flex-col w-full min-h-screen mb-5 sm:mb-5 md:mb-10 lg:mb-10">
      <div className="flex flex-col items-center justify-center mt-10 sm:mt-10 md:mt-20 lg:mt-20">
        <h2 className="font-bold text-[32px] sm:text-[32px] md:text-[38px] lg:text-[38px] text-teal-500 text-center">
          'Cook Up Something Special !'
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-6 px-4 mt-10 sm:mt-12 md:mt-20 lg:mt-20 ">
          {BlogCards.map((blog) => (
            <Card key={blog.id} className="shadow-md p-4">
              <Image
                src={blog.src}
                alt={blog.title}
                width={200}
                height={100}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="font-semibold text-[18px]">{blog.title}</h3>
              
              <p className="text-gray-700 mt-5 text-[16px]">{blog.detail}</p>
              <Link href={`/Blog/${blog.id}`}>
                <p className="cursor-pointer font-semibold text-[22px] text-red-600 mt-4 hover:text-red-400">
                  Get Recipe...
                </p>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
