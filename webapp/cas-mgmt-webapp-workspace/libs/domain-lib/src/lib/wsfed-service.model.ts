import {RegexRegisteredService, RegisteredService} from './registered-service.model';
import {WsFederationClaimsReleasePolicy} from './attribute-release.model';

export class WSFederationRegisterdService extends RegexRegisteredService {
  static readonly cName = 'org.apereo.cas.ws.idp.services.WSFederationRegisteredService';

  realm: string;
  protocol: string;
  tokenType: string;
  wsdlLocation: string;
  namespace: string;
  addressingNamespace: string;
  policyNamespace: string;
  wsdlService: string;
  wsdlEndpoint: string;
  appliesTo: string;

  static instanceOf(obj: any): boolean {
    return obj && obj['@class'] === WSFederationRegisterdService.cName;
  }

  constructor(service?: RegisteredService) {
    super(service);
    const s: WSFederationRegisterdService = WSFederationRegisterdService.instanceOf(service)
      ? service as WSFederationRegisterdService : undefined;
    this.realm = s?.realm;
    this.protocol = s?.protocol;
    this.tokenType = s?.tokenType;
    this.wsdlLocation = s?.wsdlLocation;
    this.namespace = s?.namespace;
    this.addressingNamespace = s?.addressingNamespace;
    this.policyNamespace = s?.policyNamespace;
    this.wsdlService = s?.wsdlService;
    this.wsdlEndpoint = s?.wsdlEndpoint;
    this.appliesTo = s?.appliesTo;
    this.attributeReleasePolicy = s?.attributeReleasePolicy && WsFederationClaimsReleasePolicy.instanceOf(s.attributeReleasePolicy)
      ? s.attributeReleasePolicy
      : new WsFederationClaimsReleasePolicy();
    this['@class'] = WSFederationRegisterdService.cName;
  }
}
