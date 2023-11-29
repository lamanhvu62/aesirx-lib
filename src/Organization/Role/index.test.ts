import { OrganizationRoleApiService } from './index';
import { describe, expect } from '@jest/globals';
let createID: any = '';
describe('OrganizationRole', () => {
  it('Get List', async () => {
    const service = new OrganizationRoleApiService();

    const filters = {
      'list[limitstart]': 0,
      'list[limit]': 2,
    };

    const data = await service.getList(filters);

    expect(data?.listItems?.length).toBeGreaterThan(0);
  });

  it('Create', async () => {
    const service = new OrganizationRoleApiService();

    const data = {
      role_name: 'Role 0000',
      description: 'description',
    };

    const response = await service.create(data);

    createID = response?.result;

    expect(createID).not.toBeNull();
    expect(createID).toBeDefined();
    expect(createID).not.toBeUndefined();
    expect(createID).not.toBe('false');
  });

  it('Update', async () => {
    const service = new OrganizationRoleApiService();

    const data = {
      id: createID,
      role_name: 'Role 0001',
      description: 'description',
    };

    const response = await service.update(data);

    expect(response).toBeTruthy();
  });

  it('Get Detail', async () => {
    const service = new OrganizationRoleApiService();

    const response: any = await service.getDetail(createID);

    expect(response?.id).toEqual(createID);
  });

  it('Delete', async () => {
    const service = new OrganizationRoleApiService();

    const response = await service.delete([createID]);

    expect(response).toBeTruthy();
  });
});
