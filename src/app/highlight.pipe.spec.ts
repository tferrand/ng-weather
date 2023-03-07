import { HighlightPipe } from "./highlight.pipe";

describe('HighlightPipe', () => {
  let pipe: HighlightPipe;

  beforeEach(() => {
    pipe = new HighlightPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return the value unmodified if there is no argument provided', () => {
    expect(pipe.transform('bonjour les gars', null)).toEqual('bonjour les gars');
  });

  it('should return the value unmodified if the argument is and empty string', () => {
    expect(pipe.transform('bonjour les gars', '')).toEqual('bonjour les gars');
  });

  it('should return the value unmodified if the argument is not contained in the value', () => {
    expect(pipe.transform('bonjour les gars', 'lut')).toEqual('bonjour les gars');
  });

  it('should replace the matching part of the value by the FIRST found match wrapped inside "mark and b" tags', () => {
    expect(pipe.transform('salut les gars', 'lut'))
      .toEqual('sa<mark><b>lut</b></mark> les gars');
  });

  it('should replace the matching parts of the valu by the FIRST found match wrappede inside "mark and b" tags (when there is multiple results)', () => {
    expect(pipe.transform('salut les gars, salut les gars', 'lut'))
      .toEqual('sa<mark><b>lut</b></mark> les gars, sa<mark><b>lut</b></mark> les gars');
  });

  it('should replace the matching part (case insensitive) of the value by the FIRST found match wrapped inside "mark and b" tags', () => {
    expect(pipe.transform('salUT les gars', 'lut'))
      .toEqual('sa<mark><b>lUT</b></mark> les gars');
  });

  it('should replace the matching part (case insensitive) of the value by the FIRST found match wrapped inside "mark and b" tags (when there is multiple results)', () => {
    expect(pipe.transform('salUT les gars, salut les gars', 'lut'))
      .toEqual('sa<mark><b>lUT</b></mark> les gars, sa<mark><b>lUT</b></mark> les gars');
    // Ici on se rend compte que le pipe n'est peut être pas implémenté de manière optimale.
    // En effet le deuxième match, se fait remplacer lui aussi par le premier match trouvé dans la valeur d'entrée...
    // Donc ce test permet de se rendre compte qu'il faudrait peut être modifier l'implémentation du pipe.
  });

});