import { Entity } from "../models/Entity";

export interface EntityState<T extends Entity = Entity> {
  byId: {
    [id: number]: T;
  };
  selectedId?:number;
  loadingOne:boolean;
  loadingList:boolean;
  nextId?:number;
  prevId?:number;
  errorOne?:string;
}

export const initialEntityState = {
  byId:{},
  loadingOne:false,
  loadingList:false,
  errorOne:""
}
export const setErrorOne = (state:EntityState,id:number, msg:string) => {
  return {...state, errorOne:msg,loadingOne:false};

}
export const select = (state:EntityState, id:number,nextId:number,prevId:number) => {
  return {...state,selectedId:id,nextId:nextId, prevId:prevId, loadingOne:true, errorOne:undefined};
}
export const addOne = (state: EntityState, entity: Entity, loading?:boolean) => {
  const newLoading = loading===undefined ? state.loadingOne : loading; 
    return {...state, byId:{ ...state.byId, [entity.id!]: entity}, loadingOne:newLoading };
};

export const addMany = (state: EntityState, entities: Entity[]) => {

    if(entities.length === 0){
        return state;
    }

  const entityMap = entities.reduce((prev, entity) => {
    
    return { ...prev, [entity.id!]: entity };

  }, {});

  return { ...state, byId: { ...state.byId, ...entityMap } };
};

export const getIds = (entities: Entity[] ) => {
    return entities.map((e) => e.id);
}


