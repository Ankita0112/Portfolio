import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";






const Grid = () => {
  return (
    <section id="about">
      {/* <BentoGrid className="w-full h-full"> */}
        <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: '100%' }}>
          {/* Left: Image */}
          <img
            src="/profile.jpg"
            alt="Your Name"
            style={{ width: '300px', height: '300px', borderRadius: '50%', marginRight: '64px', objectFit: 'cover' }}
          />
          {/* Right: Text */}
          <div style={{ flex: 1 }}>
            {/* <h1 style={{ margin: 0, fontSize: '2.8rem', fontWeight: 700, color: '#fff' }}>About me:</h1> */}
            <p style={{ marginTop: '32px', fontSize: '1.5rem', lineHeight: 1.5, color: '#fff' }}>
              Hi! I&apos;m a Computer Engineering student and Full Stack Developer passionate about building scalable applications, creating seamless user experiences, and exploring emerging technologies.
            </p>
          </div>
        </div>
      {/* </BentoGrid> */}
    </section>
  );
};
















// const Grid = () => {
//   return (
//     <section id="about">
//       <BentoGrid className="w-full">
//         {gridItems.map((item, i) => (
//           <BentoGridItem
//             id={item.id}
//             key={i}
//             title={item.title}
//             description={item.description}
//             // remove icon prop
//             // remove original classname condition
//             className={item.className}
//             img={item.img}
//             imgClassName={item.imgClassName}
//             titleClassName={item.titleClassName}
//             spareImg={item.spareImg}
//           />
//         ))}
//       </BentoGrid>
//     </section>
//   );
// };

export default Grid;
