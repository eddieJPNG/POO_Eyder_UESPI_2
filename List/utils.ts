export const addLines = (): void => {
    console.log('-------------------------------------------------')
}

export function clearScreen(): void {
   process.stdout.write("\x1Bc");
}
 