import { CityApiService } from './index';
import { describe, expect } from '@jest/globals';
let listItems: any = '';
describe('City', () => {
  it('Get List', async () => {
    const service = new CityApiService();

    const filters = {
      'list[limitstart]': 0,
      'list[limit]': 2,
    };

    const data = await service.getList(filters);
    listItems = data?.listItems;
    expect(data?.listItems?.length).toBeGreaterThan(0);
  });

  it('Get Detail', async () => {
    const service = new CityApiService();
    const response: any = await service.getDetail(listItems[0]?.id);

    expect(response?.id).toEqual(listItems[0]?.id);
  });
});
