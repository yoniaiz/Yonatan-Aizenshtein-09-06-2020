function autocompleteAddressesParser(addresses) {
  const parsedAddresses = addresses.map((address) => ({
    country:
      address.Country && address.Country.LocalizedName
        ? address.Country.LocalizedName
        : "",
    address: address.LocalizedName,
    Key: address.Key,
    id:
      address.AdministrativeArea && address.AdministrativeArea.ID
        ? address.AdministrativeArea.ID
        : "",
  }));

  return parsedAddresses;
}

export const helperFunctions = {
  autocompleteAddressesParser,
};
