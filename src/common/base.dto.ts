import { plainToClass } from 'class-transformer';

export abstract class BaseDTO {
  static convert<T>(this: new () => T, obj: T): T {
    return plainToClass(this, obj, { excludeExtraneousValues: true });
  }
}
