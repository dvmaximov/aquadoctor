import { useRouter } from "vue-router";

let backPaths = [];

export const useBackPath = () => {
  const router = useRouter();
  return () => {
    if (backPaths.length === 0) return;
    const backPath = backPaths.pop();
    router.push(backPath);
  };
};

export const addBackPath = (backPath) => {
  backPaths.push(backPath);
};

export const isBackEmpty = () => {
  return backPaths.length === 0;
};

export const clearBack = () => {
  backPaths = [];
};
