// import React from "react";
// import { useHistory } from "react-router-dom";
// import Bag from "../pages/Bag";
// import ItemView from "../pages/itemview";

// import styles from "./Dashboard.module.css";

// const Dashboard = () => {
//   const history = useHistory(); // Get the history object for navigation

//   const onProductImageContainer1Click = () => {
//     // Navigate to the "Item-View" page or component
//     history.push("/item-view");
//   };

//   const onButtonContainer8Click = () => {
//     // Navigate to the "Bag" page or component
//     history.push("/bag");
//   };

//   const onNavLinkContainer1Click = () => {
//     // Navigate to the "Bag" page or component (same as the button)
//     history.push("/bag");
//   };



//   return (
//     <div className={styles.bag}>
//       <div className={styles.contentFrame}>
//         <div className={styles.header}>
//           <div className={styles.checkYourBag}>Check your Bag Items</div>
//         </div>
//         <div className={styles.bagContents}>
//           <div className={styles.itemInBag}>
//             <div className={styles.productImage}>
//               <img className={styles.imageIcon} alt="" src="/image@2x.png" />
//             </div>
//             <div className={styles.contentArea}>
//               <div className={styles.header1}>
//                 <div className={styles.title}>
//                   <div className={styles.checkYourBag}>Dell XPS 13</div>
//                 </div>
//                 <div className={styles.subtitle}>
//                   <div className={styles.checkYourBag}>White</div>
//                 </div>
//               </div>
//               <div className={styles.smallDescription}>
//                 <div
//                   className={styles.loremIpsumDolor}
//                 >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam `}</div>
//               </div>
//               <div className={styles.rating}>
//                 <div className={styles.stars}>
//                   <img className={styles.star01Icon} alt="" src="/star01.svg" />
//                   <img className={styles.star01Icon} alt="" src="/star02.svg" />
//                   <img className={styles.star01Icon} alt="" src="/star03.svg" />
//                   <img className={styles.star01Icon} alt="" src="/star04.svg" />
//                   <img className={styles.star01Icon} alt="" src="/star05.svg" />
//                 </div>
//                 <div className={styles.loremIpsumDolor}>4.5 / 5</div>
//               </div>
//               <div className={styles.priceRating}>
//                 <div className={styles.price}>
//                   <div className={styles.checkYourBag}>$ 1799.99</div>
//                   <div className={styles.checkYourBag}>x</div>
//                   <div className={styles.checkYourBag}>1</div>
//                 </div>
//                 <div className={styles.quantity}>
//                   <div className={styles.price1}>
//                     <div className={styles.increaseButton}>
//                       <img className={styles.icon} alt="" src="/icon.svg" />
//                       <div className={styles.button}>Button</div>
//                     </div>
//                     <div className={styles.div3}>1</div>
//                     <div className={styles.increaseButton}>
//                       <img className={styles.icon} alt="" src="/icon1.svg" />
//                       <div className={styles.button}>Button</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className={styles.itemInBag}>
//             <div className={styles.productImage1}>
//               <img className={styles.imageIcon1} alt="" src="/image1@2x.png" />
//             </div>
//             <div className={styles.contentArea}>
//               <div className={styles.header1}>
//                 <div className={styles.title}>
//                   <div className={styles.checkYourBag}>Iphone 11</div>
//                 </div>
//                 <div className={styles.subtitle}>
//                   <div className={styles.checkYourBag}>Navy Blue</div>
//                 </div>
//               </div>
//               <div className={styles.smallDescription}>
//                 <div
//                   className={styles.loremIpsumDolor}
//                 >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam `}</div>
//               </div>
//               <div className={styles.rating}>
//                 <div className={styles.stars}>
//                   <img
//                     className={styles.star01Icon}
//                     alt=""
//                     src="/star011.svg"
//                   />
//                   <img
//                     className={styles.star01Icon}
//                     alt=""
//                     src="/star021.svg"
//                   />
//                   <img
//                     className={styles.star01Icon}
//                     alt=""
//                     src="/star031.svg"
//                   />
//                   <img
//                     className={styles.star01Icon}
//                     alt=""
//                     src="/star041.svg"
//                   />
//                   <img
//                     className={styles.star01Icon}
//                     alt=""
//                     src="/star051.svg"
//                   />
//                 </div>
//                 <div className={styles.loremIpsumDolor}>4.5 / 5</div>
//               </div>
//               <div className={styles.priceRating}>
//                 <div className={styles.price}>
//                   <div className={styles.checkYourBag}>$ 729.99</div>
//                   <div className={styles.checkYourBag}>x</div>
//                   <div className={styles.checkYourBag}>3</div>
//                 </div>
//                 <div className={styles.quantity}>
//                   <div className={styles.price1}>
//                     <div className={styles.increaseButton}>
//                       <img className={styles.icon} alt="" src="/icon2.svg" />
//                       <div className={styles.button}>Button</div>
//                     </div>
//                     <div className={styles.div3}>3</div>
//                     <div className={styles.increaseButton}>
//                       <img className={styles.icon} alt="" src="/icon3.svg" />
//                       <div className={styles.button}>Button</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className={styles.itemInBag}>
//             <div className={styles.productImage1}>
//               <img className={styles.imageIcon1} alt="" src="/image2@2x.png" />
//             </div>
//             <div className={styles.contentArea}>
//               <div className={styles.header1}>
//                 <div className={styles.title}>
//                   <div className={styles.checkYourBag}>Iphone 11</div>
//                 </div>
//                 <div className={styles.subtitle}>
//                   <div className={styles.checkYourBag}>Milky White</div>
//                 </div>
//               </div>
//               <div className={styles.smallDescription}>
//                 <div
//                   className={styles.loremIpsumDolor}
//                 >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam `}</div>
//               </div>
//               <div className={styles.rating}>
//                 <div className={styles.stars}>
//                   <img
//                     className={styles.star01Icon}
//                     alt=""
//                     src="/star012.svg"
//                   />
//                   <img
//                     className={styles.star01Icon}
//                     alt=""
//                     src="/star022.svg"
//                   />
//                   <img
//                     className={styles.star01Icon}
//                     alt=""
//                     src="/star032.svg"
//                   />
//                   <img
//                     className={styles.star01Icon}
//                     alt=""
//                     src="/star042.svg"
//                   />
//                   <img
//                     className={styles.star01Icon}
//                     alt=""
//                     src="/star052.svg"
//                   />
//                 </div>
//                 <div className={styles.loremIpsumDolor}>4.5 / 5</div>
//               </div>
//               <div className={styles.priceRating}>
//                 <div className={styles.price}>
//                   <div className={styles.checkYourBag}>$ 619.99</div>
//                   <div className={styles.checkYourBag}>x</div>
//                   <div className={styles.checkYourBag}>1</div>
//                 </div>
//                 <div className={styles.quantity}>
//                   <div className={styles.price1}>
//                     <div className={styles.increaseButton}>
//                       <img className={styles.icon} alt="" src="/icon4.svg" />
//                       <div className={styles.button}>Button</div>
//                     </div>
//                     <div className={styles.div3}>1</div>
//                     <div className={styles.increaseButton}>
//                       <img className={styles.icon} alt="" src="/icon5.svg" />
//                       <div className={styles.button}>Button</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className={styles.itemInBag}>
//             <div className={styles.productImage1}>
//               <img className={styles.imageIcon1} alt="" src="/image3@2x.png" />
//             </div>
//             <div className={styles.contentArea}>
//               <div className={styles.header1}>
//                 <div className={styles.title}>
//                   <div className={styles.checkYourBag}>Iphone 11</div>
//                 </div>
//                 <div className={styles.subtitle}>
//                   <div className={styles.checkYourBag}>Serious Black</div>
//                 </div>
//               </div>
//               <div className={styles.smallDescription}>
//                 <div
//                   className={styles.loremIpsumDolor}
//                 >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam `}</div>
//               </div>
//               <div className={styles.rating}>
//                 <div className={styles.stars}>
//                   <img
//                     className={styles.star01Icon}
//                     alt=""
//                     src="/star013.svg"
//                   />
//                   <img
//                     className={styles.star01Icon}
//                     alt=""
//                     src="/star023.svg"
//                   />
//                   <img
//                     className={styles.star01Icon}
//                     alt=""
//                     src="/star033.svg"
//                   />
//                   <img
//                     className={styles.star01Icon}
//                     alt=""
//                     src="/star043.svg"
//                   />
//                   <img
//                     className={styles.star01Icon}
//                     alt=""
//                     src="/star053.svg"
//                   />
//                 </div>
//                 <div className={styles.loremIpsumDolor}>4.5 / 5</div>
//               </div>
//               <div className={styles.priceRating}>
//                 <div className={styles.price}>
//                   <div className={styles.checkYourBag}>$ 619.99</div>
//                   <div className={styles.checkYourBag}>x</div>
//                   <div className={styles.checkYourBag}>2</div>
//                 </div>
//                 <div className={styles.quantity}>
//                   <div className={styles.price1}>
//                     <div className={styles.increaseButton}>
//                       <img className={styles.icon} alt="" src="/icon6.svg" />
//                       <div className={styles.button}>Button</div>
//                     </div>
//                     <div className={styles.div3}>2</div>
//                     <div className={styles.increaseButton}>
//                       <img className={styles.icon} alt="" src="/icon7.svg" />
//                       <div className={styles.button}>Button</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className={styles.bagChild} />
//       <div className={styles.navbar}>
//         <div className={styles.navLinkstop}>
//           <div className={styles.logo} onClick={onLogoContainerClick}>
//             <img className={styles.logoChild} alt="" src="/group-1.svg" />
//           </div>
//           <img
//             className={styles.navLinkstopChild}
//             alt=""
//             src="/rectangle-1@2x.png"
//           />
//           <div className={styles.menuIcon}>
//             <img className={styles.icon8} alt="" src="/icon8.svg" />
//           </div>
//           <div className={styles.navLink} onClick={onNavLinkContainerClick}>
//             <img className={styles.star01Icon} alt="" src="/icon9.svg" />
//             <div className={styles.link}>Store</div>
//           </div>
//           <div className={styles.navLink1}>
//             <img className={styles.star01Icon} alt="" src="/icon10.svg" />
//             <div className={styles.link}>Cart</div>
//           </div>
//         </div>
//         <div className={styles.menuIcon}>
//           <div className={styles.navLink2}>
//             <img className={styles.star01Icon} alt="" src="/icon11.svg" />
//             <div className={styles.link}>Link</div>
//           </div>
//         </div>
//       </div>
//       <div className={styles.bagArea}>
//         <div className={styles.menuIcon}>
//           <div className={styles.bagTotal}>Bag</div>
//         </div>
//         <div className={styles.bagItems}>
//           <div className={styles.row}>
//             <div className={styles.bagItem}>
//               <div className={styles.productImage4}>
//                 <img
//                   className={styles.imageIcon4}
//                   alt=""
//                   src="/image4@2x.png"
//                 />
//               </div>
//             </div>
//             <div className={styles.bagItem}>
//               <div className={styles.productImage4}>
//                 <img
//                   className={styles.imageIcon1}
//                   alt=""
//                   src="/image5@2x.png"
//                 />
//               </div>
//             </div>
//             <div className={styles.bagItem}>
//               <div className={styles.productImage4}>
//                 <img
//                   className={styles.imageIcon1}
//                   alt=""
//                   src="/image6@2x.png"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className={styles.row1}>
//             <div className={styles.bagItem}>
//               <div className={styles.productImage4}>
//                 <img
//                   className={styles.imageIcon1}
//                   alt=""
//                   src="/image7@2x.png"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className={styles.cta}>
//           <div className={styles.total}>
//             <div className={styles.bagTotal}>Bag Total:</div>
//             <div className={styles.bagTotal}>{`$ 5,849.93   `}</div>
//           </div>
//           <div className={styles.button8} onClick={onButtonContainerClick}>
//             <img className={styles.star01Icon} alt="" src="/icon12.svg" />
//             <div className={styles.bagTotal}>Checkout</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Bag;
