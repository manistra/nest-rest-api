import { Injectable } from '@nestjs/common';
import { PassportStrategy, AuthGuard } from '@nestjs/passport';
import { BearerStrategy } from 'passport-azure-ad';
import { ConfigService } from '@nestjs/config';

/**
 * For this to work the request Authorization header must have the following format
 * Authorization = Bearer <ad_id_token>
 * Extracts ID token from header and validates it.
 */
@Injectable()
export class AzureADStrategy extends PassportStrategy(
  BearerStrategy,
  'azure-ad',
) {
  constructor(private config: ConfigService) {
    const clientID = config.get('AZURE_CLIENT_ID');
    const tenantID = config.get('AZURE_TENANT_ID');

    super({
      identityMetadata: `https://login.microsoftonline.com/${tenantID}/v2.0/.well-known/openid-configuration`,
      clientID
    });
  }

  async validate(data) {
    console.log(data)
    return data;
  }
}

export const AzureADGuard = AuthGuard('azure-ad');
