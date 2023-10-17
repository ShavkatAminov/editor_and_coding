import {Inject, Injectable} from "@nestjs/common";
import {CACHE_MANAGER} from "@nestjs/cache-manager";

@Injectable()
export class RedisCacheService {
    constructor(@Inject(CACHE_MANAGER) private cacheManager: any) {}

    public getValue(key: string) {
        return this.cacheManager.get(key);
    }

    public setValue(key: string, value: any, expireTime: number = 5000) {
        this.cacheManager.set(key, value, expireTime);
    };

    public delete(key: string) {
        this.cacheManager.del(key);
    }
}
