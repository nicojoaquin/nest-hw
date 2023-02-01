import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import * as fs from 'fs';

@Injectable()
export class RemoveFilesInterceptor implements NestInterceptor {
  intercept(_context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(
        tap(({ images }) =>
          images.map((file: Express.Multer.File) => fs.unlinkSync(file.path)),
        ),
      );
  }
}
