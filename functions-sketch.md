### List of functions for Bootcamp Final Project ###

1. DID Creation *Users will have to request a DID related to their public key*

`function didCreation(address _didCaller) { // Creates DID }`

2. DID Registration *Users will have to request a registration from this DID based on real document*
   
`function didRegistration(address _didCaller) { // Registers ID }`

3. DID update *Users will have the possibility to update information on this DID*
   
`function didUdpdate(address _didCaller) { // Updates DID }`

4. DID deactivation *Users will have the possibility to deactivate their DIDs*
   
`function didDeactivation(address _didCaller) { // Deactivates DID }`

5. Trusted Accreditation Registration / Update / Deactivation *a DID will be able to request an accreditation to be a Trusted Accreditation Registration and accredits Trusted Issuer*
   
`function taOperation(address _taCaller, enum _actionType) { // Manages Trusted Accreditation}`

6. Trusted Issuer Registration / Update / Deactivation *a DID will be able to request an accreditation to be a Trusted Issuer Registration and provides VCs* 
   
`function tiOperation(address _tiCaller, enum _actionType) { // Manages Issuer}`

7. Verfiable Credentials Issuance *a DID will request VC to an issuer. The issuer will emmit the VC related to the DID*
   
`function vcIssuance(address _did, _vc) { // Issues Verifiable Credentials }`

8. Verifiable Credentials Presentation *a DID will be able to present its VC if required*
   
`function vcPresentation(address _did, _vc) { Presents Verifiable Credentials}`

9.  Verifiable Credentials Verification *The VC presented by the DID will be controlled to confirm its validity*
    
`function vcVerification(address _did, _vc) { Controlls Verifiable Credentials}`
