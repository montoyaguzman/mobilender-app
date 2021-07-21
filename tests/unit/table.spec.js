import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import Table from '@/components/common/table.vue';

let headers = [];
let data = [];
let generalError = "";
let factoryTable = null;

beforeEach(() => {
  headers = ['id', 'name', 'age'];
  data = [
    { id: 1, name: 'joe', age: 22 },
    { id: 2, name: 'dany', age: 23 },
  ];
  generalError = 'Los headers o la data es vacía o de distinta longitud';
  factoryTable = (values = {}) => {
    return shallowMount(Table, {
      data: { ...values  }
    })
  }
});

describe('Table.vue', () => {
  
  it('exist component?', () => {
    const table = new Vue(Table);
    expect(typeof table).toBe('object');
  })

  it('initial values is OK?', () => {
    const table = new Vue(Table).$mount();
    expect(table.headers).toStrictEqual([]);
    expect(table.data).toStrictEqual([]);
  })

  it('validate update method? - js/jest', () => {
    const table = new Vue(Table);
    table.updateData(headers, data);
    expect(table.headers).toStrictEqual(headers);
    expect(table.data).toStrictEqual(data);
  })

  // same test but using shallow
  it('validate data with shallow', () => {
    const wrapper = factoryTable();
    wrapper.setData({ headers, data });
    expect(wrapper.vm.headers).toStrictEqual(headers);
    expect(wrapper.vm.data).toStrictEqual(data);
  })

  it('validate generalError (empty info)', () => {
    const wrapper = factoryTable({ headers: [], data: []  });
    expect(wrapper.find('.generalError').exists()).toBe(true);
    expect(wrapper.find('.generalError').text()).toEqual(generalError);
  })

  it('validate showTable', () => {
    const wrapper = factoryTable();
    wrapper.setData({ headers, data });
    expect(wrapper.find('.generalError').exists()).toBe(false);
    expect(wrapper.find('.table').exists()).toBe(true);
  })

  it('validate exists headersError', () => {
    const wrapper = factoryTable();
    wrapper.setData({ data });
    expect(wrapper.find('.headersError').exists()).toBe(true);
  })

  it('validate NO exists headersError', () => {
    const wrapper = factoryTable();
    wrapper.setData({ headers });
    expect(wrapper.find('.headersError').exists()).toBe(false);
  })

  it('validate exists infoError', () => {
    const wrapper = factoryTable();
    wrapper.setData({ headers });
    expect(wrapper.find('.infoError').exists()).toBe(true);
  })

  it('validate NO exists infoError - OK', () => {
    const wrapper = factoryTable();
    wrapper.setData({ data });
    expect(wrapper.find('.infoError').exists()).toBe(false);
  })

})
