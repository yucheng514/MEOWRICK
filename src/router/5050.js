function getModules() {
  const modules = import.meta.glob("../components/*.vue");
  return modules;
}
function getComponents() {
  const components = import.meta.globEager("../components/*.vue");
  return components;
}
export const vueRouters = function () {
  let routerList = [];

  const modules = getModules();
  const components = getComponents();
  Object.keys(modules).forEach((key) => {
    const viewSrc = components[key];
    const file = viewSrc.default;
    //  if (!file.isRouter) return
    // 首字母转小写 letterToLowerCase 首字母转大写 letterToUpperCase
    routerList.push({
      path: `/${file.name}`,
      name: `${file.name}`,
      component: modules[key],
    });
  });
  return routerList;
};

// export const vueRouters = function (router) {
//   let routerList = [];
//   const modules = import.meta.glob("../components/*.vue");
//   for (const path in modules) {
//     modules[path]().then((mod) => {
//         console.log(234);
//       const file = mod.default;
//       routerList.push({
//         path: `/${file.name}`,
//         name: `${file.name}`,
//         component: file,
//       });
//     });
//   }
//   return routerList;
// };
