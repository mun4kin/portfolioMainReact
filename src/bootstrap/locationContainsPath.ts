export function locationContainsPath(location: Location, path: string): boolean {
  console.warn(path, location.href);
  return location.href.indexOf(`${location.origin}/${path}`) !== -1;
}
